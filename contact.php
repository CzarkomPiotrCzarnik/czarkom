<?php
declare(strict_types=1);

// Nagłówki CORS – akceptujemy tylko POST z własnej domeny
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ['https://czarkom.pl', 'https://www.czarkom.pl'], true)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header('Access-Control-Allow-Origin: https://czarkom.pl');
}
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Niedozwolona metoda']);
    exit;
}

// Wczytaj konfigurację
$config_file = __DIR__ . '/contact-config.php';
if (!file_exists($config_file)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Brak pliku konfiguracyjnego']);
    exit;
}
require_once $config_file;

// Walidacja danych
$name    = trim(strip_tags($_POST['name']    ?? ''));
$phone   = trim(strip_tags($_POST['phone']   ?? ''));
$email   = trim(strip_tags($_POST['email']   ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Wypełnij wszystkie wymagane pola']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Nieprawidłowy adres e-mail']);
    exit;
}

// -------------------------------------------------------------------------
// Minimalna obsługa SMTP przez SSL (port 465 / SMTPS)
// -------------------------------------------------------------------------
function smtp_command(mixed $socket, string $cmd): string
{
    fwrite($socket, $cmd . "\r\n");
    return smtp_read($socket);
}

function smtp_read(mixed $socket): string
{
    $response = '';
    while ($line = fgets($socket, 512)) {
        $response .= $line;
        if (strlen($line) >= 4 && $line[3] === ' ') {
            break; // ostatnia linia odpowiedzi wieloliniowej
        }
    }
    return $response;
}

function smtp_code(string $response): int
{
    return (int) substr($response, 0, 3);
}

/**
 * Wysyła wiadomość przez SMTP SSL (port 465).
 * Rzuca wyjątek przy błędzie.
 */
function smtp_send(
    string $host,
    int    $port,
    string $user,
    string $pass,
    string $to,
    string $replyTo,
    string $subject,
    string $body
): void {
    $ctx = stream_context_create([
        'ssl' => [
            'verify_peer'      => true,
            'verify_peer_name' => true,
        ],
    ]);

    $socket = stream_socket_client(
        "ssl://{$host}:{$port}",
        $errno,
        $errstr,
        15,
        STREAM_CLIENT_CONNECT,
        $ctx
    );

    if ($socket === false) {
        throw new RuntimeException("Połączenie SMTP nie powiodło się: $errstr ($errno)");
    }

    stream_set_timeout($socket, 15);

    $greeting = smtp_read($socket);
    if (smtp_code($greeting) !== 220) {
        throw new RuntimeException("Nieoczekiwane powitanie: $greeting");
    }

    // EHLO
    $r = smtp_command($socket, 'EHLO ' . (gethostname() ?: 'localhost'));
    if (smtp_code($r) !== 250) {
        throw new RuntimeException("EHLO error: $r");
    }

    // AUTH LOGIN
    $r = smtp_command($socket, 'AUTH LOGIN');
    if (smtp_code($r) !== 334) {
        throw new RuntimeException("AUTH LOGIN error: $r");
    }

    $r = smtp_command($socket, base64_encode($user));
    if (smtp_code($r) !== 334) {
        throw new RuntimeException("Błąd loginu: $r");
    }

    $r = smtp_command($socket, base64_encode($pass));
    if (smtp_code($r) !== 235) {
        throw new RuntimeException("Błąd hasła / autentykacja nieudana: $r");
    }

    // MAIL FROM
    $r = smtp_command($socket, "MAIL FROM:<{$user}>");
    if (smtp_code($r) !== 250) {
        throw new RuntimeException("MAIL FROM error: $r");
    }

    // RCPT TO
    $r = smtp_command($socket, "RCPT TO:<{$to}>");
    if (smtp_code($r) !== 250) {
        throw new RuntimeException("RCPT TO error: $r");
    }

    // DATA
    $r = smtp_command($socket, 'DATA');
    if (smtp_code($r) !== 354) {
        throw new RuntimeException("DATA error: $r");
    }

    $subjectEncoded = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $bodyBase64     = chunk_split(base64_encode($body));

    $email_data  = "From: Formularz Czarkom <{$user}>\r\n";
    $email_data .= "Reply-To: {$replyTo}\r\n";
    $email_data .= "To: {$to}\r\n";
    $email_data .= "Subject: {$subjectEncoded}\r\n";
    $email_data .= "MIME-Version: 1.0\r\n";
    $email_data .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $email_data .= "Content-Transfer-Encoding: base64\r\n";
    $email_data .= "\r\n";
    $email_data .= $bodyBase64;
    $email_data .= "\r\n.\r\n";

    fwrite($socket, $email_data);
    $r = smtp_read($socket);
    if (smtp_code($r) !== 250) {
        throw new RuntimeException("Wysyłka treści nieudana: $r");
    }

    smtp_command($socket, 'QUIT');
    fclose($socket);
}

// -------------------------------------------------------------------------
// Wyślij
// -------------------------------------------------------------------------
$subject = "Wiadomość z formularza — {$name}";
$body    = "Imię i nazwisko: {$name}\n";
$body   .= "Telefon: " . ($phone !== '' ? $phone : '—') . "\n";
$body   .= "E-mail: {$email}\n\n";
$body   .= "Wiadomość:\n{$message}";

try {
    smtp_send(
        SMTP_HOST,
        SMTP_PORT,
        SMTP_USER,
        SMTP_PASS,
        SMTP_TO,
        $email,
        $subject,
        $body
    );
    echo json_encode(['success' => true]);
} catch (RuntimeException $e) {
    error_log('[contact.php] SMTP error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Błąd wysyłania — spróbuj ponownie lub zadzwoń.']);
}
