# Prompt dla agenta w VS Code — pełny brief wykonawczy dla projektu Czarkom Next.js

## Kontekst
Masz zbudować nową stronę `czarkom.pl` w **Next.js**.

W katalogu projektu znajduje się plik:

- `czarkom-next-spec-full.md`

Ten plik jest **głównym dokumentem strategicznym**.  
Zawiera:
- architekturę informacji,
- priorytety biznesowe,
- kierunek SEO,
- strukturę usług,
- strony lokalne,
- założenia UX,
- ton marki,
- kolejność wdrożenia.

Masz traktować ten markdown jako **source of truth** dla całego projektu.

---

# 1. Twoja rola

Nie jesteś tylko generatorem kodu.  
Masz działać jak:
- architekt informacji,
- frontend developer,
- technical SEO implementer,
- asystent od struktury treści,
- wykonawca projektu w Next.js.

Masz przygotować projekt, który będzie:
- nowoczesny,
- szybki,
- dobrze zaprojektowany,
- łatwy do rozbudowy,
- bardzo mocny pod SEO lokalne,
- gotowy do dalszego rozwijania treści.

---

# 2. Jak masz korzystać z pliku markdown

## 2.1. Najpierw przeczytaj cały plik
Zanim wygenerujesz jakikolwiek kod:
1. przeczytaj cały plik `czarkom-next-spec-full.md`,
2. wypisz z niego:
   - listę stron,
   - listę lokalizacji,
   - główne filary usług,
   - priorytety wdrożenia,
   - wymagania SEO,
   - wymagania UX,
   - założenia treściowe.

## 2.2. Traktuj markdown jako dokument nadrzędny
Jeżeli markdown mówi, że:
- najważniejsze są przeglądy i protokoły,
- trzeba robić osobne strony lokalne,
- homepage ma być stroną marki,
to masz to wdrożyć właśnie w ten sposób.

## 2.3. Nie upraszczaj bez powodu
Nie spłaszczaj projektu do kilku podstron, jeśli specyfikacja zakłada bardziej rozbudowaną architekturę.

## 2.4. Jeśli czegoś nie ma wprost
Jeżeli jakiegoś szczegółu nie ma w markdownie, uzupełnij go rozsądnie, ale:
- w zgodzie z celem biznesowym,
- w zgodzie z SEO lokalnym,
- w zgodzie z architekturą dokumentu.

---

# 3. Główne cele projektu

## 3.1. Cele biznesowe
Strona ma generować:
- telefony,
- formularze,
- zapytania o wycenę,
- zapytania o przeglądy,
- zapytania o pomiary i protokoły,
- zapytania o monitoring,
- zapytania o automatykę.

## 3.2. Cele SEO
Strona ma być przygotowana pod wysoką widoczność lokalną dla:
- Rzeszowa,
- Krosna,
- Jasła.

Dodatkowo architektura ma umożliwiać łatwe rozwinięcie na kolejne lokalizacje.

## 3.3. Cele UX
Strona ma:
- budzić zaufanie,
- być czytelna,
- być szybka,
- być nowoczesna,
- mieć mocne CTA,
- dobrze działać na mobile.

---

# 4. Stack i założenia techniczne

## Wymagany stack
- Next.js
- TypeScript
- App Router

## Dodatkowe założenia
- komponentowe podejście,
- czytelny podział folderów,
- łatwość dalszej rozbudowy,
- dobra wydajność,
- pełna responsywność,
- dobre praktyki SEO technicznego.

---

# 5. Architektura projektu, którą masz zaproponować

Przygotuj logiczną strukturę katalogów, na przykład:
- `app/`
- `components/`
- `components/sections/`
- `components/ui/`
- `data/`
- `lib/`
- `public/`
- `public/images/`
- `public/icons/`

Dodatkowo możesz rozbić dane na:
- dane usług,
- dane lokalizacji,
- dane FAQ,
- dane meta / SEO.

---

# 6. Co masz wykonać

## 6.1. Etap planowania
Najpierw przygotuj:
- plan wdrożenia,
- strukturę routingu,
- listę stron,
- listę komponentów,
- sposób zarządzania danymi stron,
- sposób wdrożenia SEO.

## 6.2. Etap bazowy
Utwórz:
- layout główny,
- header,
- footer,
- globalne style,
- komponenty współdzielone,
- podstawową nawigację.

## 6.3. Etap stron głównych
Wygeneruj:
- homepage,
- o firmie,
- kontakt,
- FAQ,
- realizacje,
- blog / poradnik.

## 6.4. Etap usług
Wygeneruj strony usługowe zgodnie ze specyfikacją:
- elektryk,
- instalacje elektryczne,
- przeglądy elektryczne,
- pomiary elektryczne,
- protokoły elektryczne,
- monitoring CCTV,
- kamery do domu,
- monitoring firmy,
- serwis monitoringu,
- automatyka,
- smart home,
- BMS,
- integracje,
- sterowanie oświetleniem,
- sterowanie ogrzewaniem,
- automatyzacja budynku.

## 6.5. Etap lokalny
Wygeneruj strony lokalne dla:
- Rzeszowa,
- Krosna,
- Jasła.

Dla najważniejszych usług:
- elektryk,
- przeglądy elektryczne,
- pomiary,
- protokoły,
- monitoring,
- automatyka.

## 6.6. Etap SEO technicznego
Dodaj:
- metadata,
- title,
- description,
- open graph,
- canonical,
- sitemap,
- robots,
- breadcrumbs,
- schema.org.

## 6.7. Etap treści i konwersji
Upewnij się, że każda ważna strona ma:
- sekcję hero,
- korzyści,
- zakres usług,
- FAQ,
- CTA,
- sekcję kontaktową,
- linki wewnętrzne.

---

# 7. Jak mają wyglądać strony

## 7.1. Homepage
Homepage ma być stroną marki i zaufania.
Ma:
- komunikować zakres usług,
- prowadzić do podstron,
- mocno eksponować przeglądy i protokoły,
- pokazywać lokalny zasięg,
- zachęcać do kontaktu.

## 7.2. Strony usługowe
Mają być:
- czytelne,
- mocne treściowo,
- napisane po polsku,
- nastawione na konwersję,
- rozsądnie zoptymalizowane pod SEO.

## 7.3. Strony lokalne
Nie mogą być kopiami z podmienionym miastem.
Każda ma zawierać:
- lokalny nagłówek,
- lokalne intro,
- lokalne FAQ,
- lokalny CTA,
- unikalne treści pomocne dla użytkownika.

---

# 8. Zasady treściowe

## Treści mają być:
- po polsku,
- naturalne,
- pomocne,
- wiarygodne,
- eksperckie, ale zrozumiałe,
- dopasowane do języka użytkownika.

## Najmocniej trzeba rozegrać:
- przeglądy elektryczne,
- pomiary,
- protokoły,
- bezpieczeństwo,
- dokumentację,
- obowiązki właściciela,
- ubezpieczenia,
- lokalny dojazd i obsługę.

## Ton marki
Marka ma być:
- profesjonalna,
- nowoczesna,
- lokalna,
- konkretna,
- premium,
- zrozumiała.

---

# 9. Wymagania SEO

## Każda strona ma mieć
- unikalny title,
- unikalny description,
- sensowny H1,
- poprawną strukturę nagłówków,
- logiczne linki wewnętrzne.

## Wdrożenia techniczne
- App Router metadata,
- JSON-LD,
- FAQ schema tam gdzie są FAQ,
- Service schema na stronach usług,
- Breadcrumbs.

## Ważne
Treści lokalne mają być wartościowe.  
Nie generuj sztucznego spamu SEO ani pustych lokalnych stron.

---

# 10. Wymagania komponentowe

Przygotuj reużywalne komponenty, np.:
- `HeroSection`
- `ServicesGrid`
- `TrustSection`
- `FaqSection`
- `CtaSection`
- `LocalAreaSection`
- `ProcessSection`
- `ContactSection`
- `Breadcrumbs`
- `SectionHeading`
- `ServiceCards`
- `LocationLinks`

---

# 11. Model danych

Jeśli to pomoże w skalowalności projektu, zorganizuj dane w osobnych plikach:
- usługi,
- miasta,
- FAQ,
- meta danych,
- sekcje.

Dzięki temu łatwiej będzie:
- generować strony lokalne,
- generować metadata,
- rozwijać kolejne miasta,
- utrzymywać spójność.

---

# 12. Priorytety wdrożenia

## Priorytet 1
- fundament projektu,
- layout,
- homepage,
- kontakt,
- o firmie,
- główne strony usług.

## Priorytet 2
- strony lokalne,
- SEO techniczne,
- schemy,
- FAQ.

## Priorytet 3
- blog,
- realizacje,
- case studies,
- dalsze dopracowanie contentu.

---

# 13. Tryb pracy

Masz pracować etapami.

## Najpierw
1. przeczytaj `czarkom-next-spec-full.md`,
2. wypisz plan,
3. zaproponuj strukturę projektu,
4. zaproponuj routing,
5. zaproponuj listę komponentów.

## Dopiero potem
6. generuj pliki,
7. buduj layout,
8. buduj strony,
9. dodawaj SEO,
10. dopracowuj UI.

---

# 14. Zasady jakości kodu

- nie rób bałaganu,
- nie duplikuj logiki,
- korzystaj z komponentów współdzielonych,
- zachowaj spójność nazewnictwa,
- przewiduj dalszą rozbudowę,
- nie twórz nadmiarowej komplikacji,
- trzymaj porządek i skalowalność.

---

# 15. Oczekiwany rezultat

Gotowy projekt premium dla Czarkom:
- szybki,
- nowoczesny,
- bardzo dobrze zaplanowany,
- mocny pod SEO lokalne,
- dobry sprzedażowo,
- gotowy do dalszego rozwijania treści i kolejnych lokalizacji.

Jeśli podejmujesz decyzję projektową, uzasadniaj ją zgodnością z plikiem `czarkom-next-spec-full.md`.
