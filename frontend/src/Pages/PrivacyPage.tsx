import Navbar from "../Components/Navbar";
import FooterComponent from "../Components/FooterComponent";

export default function PrivacyPage() {
  const linkStyle = "break-words font-semibold text-red-700 underline underline-offset-4 hover:text-red-800";
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <header className="mx-auto max-w-4xl px-4 pb-12 pt-32 sm:px-6 sm:pt-40">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-500">Twoje dane</p>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Polityka prywatności</h1>
          <p className="mt-6 leading-7 text-gray-300">Informacje o danych przekazywanych podczas korzystania ze strony talarczykdachy.pl i kontaktu z naszą firmą.</p>
        </header>
        <div className="bg-stone-100 px-4 py-12 text-gray-800 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-4xl space-y-10 leading-7 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-950 [&_p+p]:mt-4">
            <section>
              <h2>1. Administrator i kontakt</h2>
              <p>Administratorem danych jest Paweł Talarczyk, prowadzący działalność prezentowaną na stronie jako Paweł Talarczyk Dachy, Podłopień 64, 34-650 Tymbark.</p>
              <p>W sprawach danych osobowych napisz na <a className={linkStyle} href="mailto:biuro.talarczykd@gmail.com">biuro.talarczykd@gmail.com</a> lub zadzwoń: <a className={linkStyle} href="tel:+48664983540">664 983 540</a>.</p>
            </section>
            <section>
              <h2>2. Jakie dane i w jakim celu przetwarzamy</h2>
              <p>Formularz obejmuje imię i nazwisko, telefon lub e-mail, treść wiadomości oraz opcjonalnie miejscowość i rodzaj usługi. Dane służą do odpowiedzi na zapytanie i omówienia planowanych prac. Podanie danych jest dobrowolne, ale bez wymaganych informacji nie można wysłać formularza ani uzyskać odpowiedzi tą drogą.</p>
              <p>Podstawą przetwarzania danych przesłanych przez formularz jest wyrażona zgoda (art. 6 ust. 1 lit. a RODO). Możesz ją wycofać w dowolnym momencie, kontaktując się z nami. Wycofanie nie wpływa na zgodność z prawem wcześniejszego przetwarzania.</p>
              <p>Jeśli prosisz o przygotowanie oferty lub działania przed zawarciem umowy, przetwarzanie niezbędnych do tego danych opiera się na art. 6 ust. 1 lit. b RODO. Dochodzenie lub obrona roszczeń może wymagać zachowania odpowiedniej korespondencji na podstawie art. 6 ust. 1 lit. f RODO — prawnie uzasadnionego interesu administratora.</p>
            </section>
            <section>
              <h2>3. Usługi obsługujące dane</h2>
              <p>Wiadomości z formularza obsługuje Formspree, Inc. Dostęp do danych w zakresie niezbędnym do obsługi strony i korespondencji mogą mieć również dostawcy hostingu (SeoHost) i poczty elektronicznej (Google — Gmail).</p>
              <p>Formspree przetwarza dane w Stanach Zjednoczonych i deklaruje stosowanie standardowych klauzul umownych jako zabezpieczenia transferu danych. Szczegóły oraz informacje o zabezpieczeniach znajdziesz w <a className={linkStyle} href="https://formspree.io/legal/privacy-policy/">polityce prywatności Formspree</a> i na <a className={linkStyle} href="https://formspree.io/security/">stronie bezpieczeństwa Formspree</a>. Informacje o zabezpieczeniach dotyczących Twoich danych możesz również uzyskać, kontaktując się z administratorem.</p>
              <p>Korzystanie z poczty Google może wiązać się z przetwarzaniem danych poza Europejskim Obszarem Gospodarczym. Informacje o lokalizacjach przetwarzania i mechanizmach ochrony przekazuje <a className={linkStyle} href="https://policies.google.com/privacy">Google w polityce prywatności</a>.</p>
            </section>
            <section>
              <h2>4. Jak długo przechowujemy dane</h2>
              <p>Korespondencję przechowujemy przez czas potrzebny do obsługi zapytania i zakończenia związanych z nim ustaleń. Dane przetwarzane wyłącznie na podstawie zgody są usuwane po jej wycofaniu lub gdy przestają być potrzebne do wskazanego celu. Jeżeli korespondencja jest potrzebna do ustalenia, dochodzenia lub obrony roszczeń, odpowiednie dane mogą być przechowywane do upływu terminów ich przedawnienia.</p>
              <p>Jeśli dojdzie do zawarcia umowy, okres przechowywania dokumentów związanych z jej realizacją wynika również z obowiązków prawnych, w tym przepisów podatkowych i rachunkowych.</p>
            </section>
            <section>
              <h2>5. Twoje prawa</h2>
              <p>Na warunkach określonych w RODO przysługuje Ci prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz przenoszenia danych. Możesz wycofać zgodę, a w przypadku przetwarzania opartego na prawnie uzasadnionym interesie — wnieść sprzeciw ze względu na swoją szczególną sytuację.</p>
              <p>Żądanie możesz przesłać na podany wyżej adres e-mail. Masz również prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych. Informacje o jej złożeniu są dostępne na <a className={linkStyle} href="https://uodo.gov.pl/492">stronie UODO</a>.</p>
              <p>Nie podejmujemy wobec osób wysyłających zapytania decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu.</p>
            </section>
            <section>
              <h2>6. Dane techniczne i odnośniki</h2>
              <p>Obsługa strony i ochrona formularza przed nadużyciami mogą wymagać przetwarzania danych technicznych, takich jak adres IP, informacje o przeglądarce i czas żądania. Służą one prawidłowemu działaniu i bezpieczeństwu usług.</p>
              <p>Strona zawiera odnośniki do Facebooka i Instagrama. Po przejściu do tych serwisów obowiązują zasady prywatności ich dostawców.</p>
            </section>
            <a href="/kontakt" className="inline-flex min-h-12 items-center bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Przejdź do kontaktu</a>
          </div>
        </div>
      </main>
      <FooterComponent hideContactCta />
    </div>
  );
}
