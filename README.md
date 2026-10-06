# StronaDekarska

## Wdrożenie na SeoHost

1. W katalogu `frontend` uruchom `npm run build`.
2. Wgraj zawartość `frontend/dist` do katalogu domeny zawierającego `index.html`
   (zwykle `public_html`). Nie wgrywaj samego katalogu `dist` jako podkatalogu.
3. Wgraj również ukryty plik `.htaccess`. Vite kopiuje go z `frontend/public`.
   Jeśli na serwerze istnieje już `.htaccess`, zachowaj jego kopię i połącz
   reguły zamiast nadpisywać ustawienia hostingu, HTTPS lub zabezpieczeń.
4. Otwórz bezpośrednio `/kontakt`, `/o-nas` i `/realizacje`, a następnie odśwież
   każdą stronę. Powinny wyświetlać właściwą podstronę bez błędu 404.
5. Sprawdź również stronę główną i ładowanie zdjęć. Nieistniejący adres oraz
   nieistniejący plik w `/assets/` powinny nadal zwracać 404.

Reguły `.htaccess` kierują znane podstrony do odpowiadających im plików HTML,
np. `/kontakt` do `kontakt.html`, pozostawiając adres w przeglądarce.
Właściwy widok wybiera React Router. Przy dodawaniu kolejnych podstron należy
rozszerzyć listę w `frontend/public/.htaccess`.
Plik `frontend/vercel.json` dotyczy wyłącznie hostingu Vercel.

## SEO

Tytuły, opisy i dane firmy są w `frontend/src/seo.ts`. Build generuje osobny
HTML dla każdej podstrony, `sitemap.xml` i `robots.txt`. Metadane są dostępne
bez JavaScriptu; treść strony nadal renderuje React. Przy przejściach przez menu
metadane aktualizuje `SeoMetadata`. Zdjęcie podglądu to `frontend/public/og-roof.jpg`.

Wdrażając SEO, wgraj całą zawartość nowego `dist`, łącznie z `.htaccess`,
`o-nas.html`, `realizacje.html`, `kontakt.html`, plikami SEO i nowym katalogiem
`assets`. Samo podmienienie `.htaccess` bez plików HTML spowoduje błędy podstron.
Zachowaj istniejące ustawienia serwera przy łączeniu reguł `.htaccess`.

Po wdrożeniu sprawdź źródło HTML każdej podstrony: powinno zawierać jeden tytuł,
jeden opis i jeden canonical zgodny z adresem podstrony. Sprawdź także przejścia
w menu i przycisk Wstecz. Mapę strony można zgłosić w Google Search Console:
`https://talarczykdachy.pl/sitemap.xml`.

## Formularz i prywatność

Walidację kontaktu sprawdzisz poleceniem `node --test scripts/contact-validation.test.mjs`
uruchomionym w `frontend` (Node z obsługą plików TypeScript).
Walidacja w przeglądarce sprawdza format danych, nie istnienie numeru lub skrzynki;
ochrona i walidacja po stronie Formspree zależą od ustawień usługi.

Strona `/polityka-prywatnosci` ma własny wygenerowany HTML, metadane i wpis w mapie
strony. Wdrażając ją, wgraj także `polityka-prywatnosci.html` i aktualny `.htaccess`.
Treść oparto na danych firmy w witrynie i dokumentacji dostawców. Właściciel
powinien zweryfikować zgodność opisu z faktyczną obsługą wiadomości, retencją
i warunkami kont Formspree oraz poczty przed publikacją.
