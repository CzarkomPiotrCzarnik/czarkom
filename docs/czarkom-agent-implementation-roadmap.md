# Mapa wdrożenia dla agenta — Czarkom Next.js

## Cel pliku

Ten dokument ma być **operacyjną mapą wdrożenia** dla agenta pracującego nad nową stroną `czarkom.pl` w **Next.js**.

Nie zastępuje on specyfikacji strategicznej.  
Jego rola to przełożenie strategii na:
- strukturę projektu,
- routing,
- komponenty,
- model danych,
- kolejność tworzenia plików,
- zasady implementacyjne,
- checklistę wdrożeniową.

## Dokumenty źródłowe

Agent ma pracować na podstawie trzech dokumentów:

1. `czarkom-next-spec-full.md` — główna strategia strony, SEO, treści i usług
2. `prompt-agent-czarkom-next-full.md` — zasady pracy i oczekiwany sposób działania agenta
3. `czarkom-agent-implementation-roadmap.md` — ten dokument, czyli praktyczna mapa wdrożenia

## Zasada nadrzędna

Jeżeli wystąpi konflikt:
1. najważniejsza jest logika biznesowa i SEO ze specyfikacji,
2. potem zasady działania z promptu,
3. potem szczegóły techniczne z tej mapy wdrożenia.

---

# 1. Stack i założenia techniczne

## Wymagany stack
- Next.js
- TypeScript
- App Router

## Zalecenia
- komponentowe podejście,
- możliwie prosty i czytelny kod,
- dobra skalowalność,
- pełna responsywność,
- mocne SEO techniczne,
- wysoka wydajność.

## Założenie architektoniczne
Projekt ma być przygotowany tak, aby dało się łatwo:
- dodać kolejne miasta,
- dodać kolejne usługi,
- rozbudować FAQ,
- dodać blog i case studies,
- modyfikować metadata bez przepisywania wielu plików.

---

# 2. Proponowana struktura katalogów

## Minimalna struktura

```text
app/
  layout.tsx
  page.tsx
  globals.css
  robots.ts
  sitemap.ts

  o-firmie/
    page.tsx

  kontakt/
    page.tsx

  faq/
    page.tsx

  realizacje/
    page.tsx

  blog/
    page.tsx

  elektryk/
    page.tsx

  instalacje-elektryczne/
    page.tsx

  przeglady-elektryczne/
    page.tsx

  pomiary-elektryczne/
    page.tsx

  protokoly-elektryczne/
    page.tsx

  monitoring-cctv/
    page.tsx

  kamery-do-domu/
    page.tsx

  monitoring-firmy/
    page.tsx

  serwis-monitoringu/
    page.tsx

  automatyka/
    page.tsx

  smart-home/
    page.tsx

  bms/
    page.tsx

  integracje/
    page.tsx

  sterowanie-oswietleniem/
    page.tsx

  sterowanie-ogrzewaniem/
    page.tsx

  automatyzacja-budynku/
    page.tsx

  elektryk-rzeszow/
    page.tsx
  elektryk-krosno/
    page.tsx
  elektryk-jaslo/
    page.tsx

  przeglady-elektryczne-rzeszow/
    page.tsx
  przeglady-elektryczne-krosno/
    page.tsx
  przeglady-elektryczne-jaslo/
    page.tsx

  pomiary-elektryczne-rzeszow/
    page.tsx
  pomiary-elektryczne-krosno/
    page.tsx
  pomiary-elektryczne-jaslo/
    page.tsx

  protokoly-elektryczne-rzeszow/
    page.tsx
  protokoly-elektryczne-krosno/
    page.tsx
  protokoly-elektryczne-jaslo/
    page.tsx

  monitoring-rzeszow/
    page.tsx
  monitoring-krosno/
    page.tsx
  monitoring-jaslo/
    page.tsx

  automatyka-rzeszow/
    page.tsx
  automatyka-krosno/
    page.tsx
  automatyka-jaslo/
    page.tsx

components/
  layout/
  sections/
  seo/
  ui/
  shared/

data/
  services.ts
  locations.ts
  faq.ts
  site.ts
  navigation.ts
  testimonials.ts
  realizations.ts
  blog.ts
  seo.ts

lib/
  metadata.ts
  schema.ts
  utils.ts
  routes.ts

public/
  images/
  icons/
```

## Alternatywa skalowalna
Jeśli agent chce zbudować projekt bardziej systemowo, może zastosować układ:
- `app/(marketing)/...`
- `app/(services)/...`
- `app/(locations)/...`

ale tylko wtedy, gdy nie komplikuje to projektu bez potrzeby.

---

# 3. Routing — lista stron do wdrożenia

## Strony główne
- `/`
- `/o-firmie`
- `/kontakt`
- `/faq`
- `/realizacje`
- `/blog`

## Strony usługowe
- `/elektryk`
- `/instalacje-elektryczne`
- `/przeglady-elektryczne`
- `/pomiary-elektryczne`
- `/protokoly-elektryczne`
- `/monitoring-cctv`
- `/kamery-do-domu`
- `/monitoring-firmy`
- `/serwis-monitoringu`
- `/automatyka`
- `/smart-home`
- `/bms`
- `/integracje`
- `/sterowanie-oswietleniem`
- `/sterowanie-ogrzewaniem`
- `/automatyzacja-budynku`

## Strony lokalne
### Elektryk
- `/elektryk-rzeszow`
- `/elektryk-krosno`
- `/elektryk-jaslo`

### Przeglądy
- `/przeglady-elektryczne-rzeszow`
- `/przeglady-elektryczne-krosno`
- `/przeglady-elektryczne-jaslo`

### Pomiary
- `/pomiary-elektryczne-rzeszow`
- `/pomiary-elektryczne-krosno`
- `/pomiary-elektryczne-jaslo`

### Protokoły
- `/protokoly-elektryczne-rzeszow`
- `/protokoly-elektryczne-krosno`
- `/protokoly-elektryczne-jaslo`

### Monitoring
- `/monitoring-rzeszow`
- `/monitoring-krosno`
- `/monitoring-jaslo`

### Automatyka
- `/automatyka-rzeszow`
- `/automatyka-krosno`
- `/automatyka-jaslo`

---

# 4. Model danych

## Założenie
Agent nie powinien hardkodować wszystkiego bezpośrednio w plikach stron, jeśli da się to sensownie wydzielić.

## Zalecany podział danych

### `data/site.ts`
Dane globalne:
- nazwa firmy,
- główny telefon,
- e-mail,
- adres,
- godziny,
- główny obszar działania,
- sociale,
- dane do schema.

### `data/navigation.ts`
- pozycje menu,
- linki footer,
- skróty do najważniejszych usług,
- linki do lokalizacji.

### `data/services.ts`
Dane usług:
- slug,
- nazwa,
- krótki opis,
- długi opis,
- główne korzyści,
- FAQ,
- CTA,
- powiązane usługi,
- powiązane miasta,
- meta title,
- meta description.

### `data/locations.ts`
Dane lokalizacji:
- slug miasta,
- nazwa miasta,
- odmiana lokalna, jeśli potrzebna,
- okolice / obszar dojazdu,
- lokalne intro,
- lokalne FAQ,
- powiązane usługi.

### `data/faq.ts`
- ogólne FAQ,
- FAQ usługowe,
- FAQ lokalne,
- FAQ homepage.

### `data/testimonials.ts`
- imię / inicjały,
- typ usługi,
- miasto,
- treść opinii.

### `data/realizations.ts`
- tytuł realizacji,
- typ realizacji,
- lokalizacja,
- opis,
- zdjęcia.

### `data/seo.ts`
- fallback metadata,
- domyślne Open Graph,
- dane canonical,
- template dla title.

---

# 5. Komponenty do przygotowania

## 5.1. Layout
### `components/layout/Header.tsx`
Powinien zawierać:
- logo,
- główne menu,
- numer telefonu,
- CTA,
- wersję mobilną.

### `components/layout/Footer.tsx`
Powinien zawierać:
- dane firmy,
- linki do usług,
- linki lokalne,
- kontakt,
- podstawowe linki prawne.

### `components/layout/Container.tsx`
Reużywalny kontener sekcji.

## 5.2. Sekcje współdzielone
### `components/sections/HeroSection.tsx`
Warianty:
- homepage,
- usługowy,
- lokalny,
- kontaktowy.

### `components/sections/ServicesGrid.tsx`
Do prezentacji filarów usług.

### `components/sections/TrustSection.tsx`
Sekcja zaufania:
- doświadczenie,
- lokalność,
- szybkość kontaktu,
- dokumentacja,
- bezpieczeństwo.

### `components/sections/ProcessSection.tsx`
Opis kroków współpracy.

### `components/sections/FaqSection.tsx`
Reużywalny blok FAQ.

### `components/sections/CtaSection.tsx`
Końcowe wezwanie do kontaktu.

### `components/sections/LocalAreaSection.tsx`
Dla stron lokalnych.

### `components/sections/BenefitsSection.tsx`
Korzyści dla klienta.

### `components/sections/ContactSection.tsx`
Telefon + formularz + dane.

### `components/sections/RelatedLinksSection.tsx`
Linkowanie do usług i lokalizacji.

### `components/sections/TestimonialsSection.tsx`
Opinie klientów.

### `components/sections/RealizationsSection.tsx`
Zdjęcia i realizacje.

## 5.3. SEO
### `components/seo/Breadcrumbs.tsx`
Breadcrumbs do stron wewnętrznych.

### `components/seo/JsonLd.tsx`
Komponent do wstrzykiwania danych strukturalnych.

## 5.4. UI
### `components/ui/Button.tsx`
### `components/ui/SectionHeading.tsx`
### `components/ui/Card.tsx`
### `components/ui/Badge.tsx`
### `components/ui/IconList.tsx`
### `components/ui/PhoneButton.tsx`

---

# 6. Biblioteki i helpery

## `lib/routes.ts`
Centralna mapa route'ów:
- slugi stron,
- linki do usług,
- linki do lokalizacji.

## `lib/metadata.ts`
Helper do generowania metadata:
- title,
- description,
- canonical,
- OG,
- lokalne warianty.

## `lib/schema.ts`
Generatory JSON-LD:
- Organization,
- LocalBusiness,
- Service,
- FAQPage,
- BreadcrumbList.

## `lib/utils.ts`
Pomocnicze funkcje ogólne.

---

# 7. Kolejność tworzenia projektu

## Etap 1 — inicjalizacja i fundament
Agent ma:
1. utworzyć projekt Next.js z TypeScript,
2. skonfigurować App Router,
3. przygotować `globals.css`,
4. zbudować `layout.tsx`,
5. dodać Header i Footer,
6. przygotować podstawowe komponenty UI.

## Etap 2 — dane i helpery
1. utworzyć pliki `data/*`,
2. utworzyć `lib/routes.ts`,
3. utworzyć `lib/metadata.ts`,
4. utworzyć `lib/schema.ts`,
5. skonfigurować podstawy SEO.

## Etap 3 — homepage i główne strony
1. zbudować homepage,
2. dodać `o-firmie`,
3. dodać `kontakt`,
4. dodać `faq`,
5. dodać `realizacje`,
6. dodać `blog`.

## Etap 4 — strony usługowe
1. elektryk,
2. instalacje elektryczne,
3. przeglądy elektryczne,
4. pomiary elektryczne,
5. protokoły elektryczne,
6. monitoring CCTV,
7. automatyka i podstrony premium.

## Etap 5 — strony lokalne
Najpierw:
- przeglądy,
- pomiary,
- protokoły,
- elektryk.

Potem:
- monitoring,
- automatyka.

## Etap 6 — SEO techniczne
1. `robots.ts`,
2. `sitemap.ts`,
3. metadata,
4. canonicale,
5. JSON-LD,
6. breadcrumbs,
7. FAQ schema.

## Etap 7 — dopracowanie UX i linkowania
1. linki między usługami,
2. linki między miastami,
3. sekcje CTA,
4. dopracowanie mobile,
5. alt texty obrazów,
6. optymalizacja treści.

---

# 8. Priorytety implementacyjne

## Najwyższy priorytet
- homepage,
- `/przeglady-elektryczne`,
- `/pomiary-elektryczne`,
- `/protokoly-elektryczne`,
- lokalne strony tych usług dla:
  - Rzeszowa,
  - Krosna,
  - Jasła.

## Wysoki priorytet
- `/elektryk`
- lokalne strony elektryka,
- `/monitoring-cctv`
- lokalne strony monitoringu.

## Średni priorytet
- automatyka,
- smart home,
- BMS,
- integracje.

## Rozwój późniejszy
- blog,
- realizacje,
- case studies,
- dalsze miasta.

---

# 9. Szablon budowy stron

## 9.1. Szablon strony usługowej
Każda główna strona usługowa powinna mieć:
1. Hero
2. Krótki opis problemu użytkownika
3. Zakres usługi
4. Korzyści
5. Dla kogo
6. Jak wygląda współpraca
7. FAQ
8. Powiązane lokalizacje
9. CTA

## 9.2. Szablon strony lokalnej
Każda strona lokalna powinna mieć:
1. Hero z miastem
2. Lokalny intro akapit
3. Co wykonujemy w tym mieście
4. Dla kogo
5. Obszar działania / okolice
6. Lokalny FAQ
7. Powiązane usługi
8. CTA

## 9.3. Szablon homepage
1. Hero
2. Główne usługi
3. Sekcja przeglądów i protokołów
4. Dlaczego Czarkom
5. Obszar działania
6. Realizacje
7. Opinie
8. FAQ
9. CTA

---

# 10. Zasady tworzenia treści

## Agent ma pisać treści:
- po polsku,
- naturalnie,
- zrozumiale,
- pomocnie,
- wiarygodnie,
- bez sztucznego przeoptymalizowania.

## Najważniejsze motywy treściowe
- bezpieczeństwo,
- dokumentacja,
- obowiązki właściciela,
- ubezpieczenie,
- lokalna dostępność,
- szybki kontakt,
- nowoczesne rozwiązania.

## Szczególna uwaga
Najmocniej dopracować:
- przeglądy elektryczne,
- pomiary,
- protokoły,
- FAQ wokół tych tematów.

---

# 11. SEO techniczne — checklista dla agenta

## Każda strona:
- ma unikalny title,
- ma unikalny meta description,
- ma jeden H1,
- ma logiczną strukturę H2/H3,
- ma linki wewnętrzne,
- ma CTA,
- ma dane schema, jeśli to uzasadnione.

## Strony FAQ:
- wdrożyć FAQPage schema.

## Strony usług:
- wdrożyć Service schema.

## Strony lokalne:
- dodać lokalne odniesienia w treści,
- nie kopiować mechanicznie treści między miastami.

## Globalnie:
- sitemap,
- robots,
- canonical,
- Open Graph,
- metadata,
- breadcrumbs.

---

# 12. Jak agent ma korzystać z tej mapy

## Zanim napiszesz kod:
1. przeczytaj `czarkom-next-spec-full.md`,
2. przeczytaj `prompt-agent-czarkom-next-full.md`,
3. przeczytaj ten dokument,
4. wypisz plan wdrożenia,
5. zaproponuj strukturę katalogów i listę komponentów.

## Podczas implementacji:
- odhaczaj etapy po kolei,
- nie zaczynaj od bloga ani dodatków,
- najpierw zbuduj fundament i strony priorytetowe.

## Przy generowaniu plików:
- dbaj o reużywalność,
- utrzymuj porządek,
- nie duplikuj logiki i sekcji.

---

# 13. Minimalny rezultat, który ma powstać

## MVP projektu powinno zawierać:
- layout,
- homepage,
- kontakt,
- o firmie,
- FAQ,
- strony usługowe kluczowe,
- strony lokalne kluczowe,
- podstawowe SEO techniczne,
- CTA i sekcje zaufania.

## Wersja rozszerzona:
- monitoring,
- automatyka,
- blog,
- realizacje,
- schema i pełne linkowanie wewnętrzne.

---

# 14. Ostateczna zasada

Agent ma podejmować decyzje tak, aby rezultat był:
- sensowny biznesowo,
- mocny lokalnie SEO,
- prosty w rozbudowie,
- nowoczesny wizualnie,
- czytelny dla klienta,
- skuteczny sprzedażowo.
