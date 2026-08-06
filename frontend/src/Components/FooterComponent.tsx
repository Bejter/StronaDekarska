type FooterComponentProps = {
  hideContactCta?: boolean;
};

function FooterComponent({ hideContactCta }: FooterComponentProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {!hideContactCta && (
        <div className="bg-stone-100 px-6 py-7 text-gray-950 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 border-l-2 border-red-600 pl-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Masz pytania?
              </p>

              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Porozmawiajmy o Twoim dachu.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-gray-600">
                Opowiedz nam o planowanych pracach — przygotujemy jasną i
                bezpłatną wycenę.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-end">
              <a
                href="tel:+48500800600"
                className="text-3xl font-bold text-gray-950 transition-colors hover:text-red-600 md:text-4xl"
              >
                500 800 600
              </a>

              <a
                href="/kontakt"
                className="inline-flex items-center justify-center bg-red-600 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-red-700"
              >
                Przejdź do kontaktu
                <span className="ml-3 text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-950 px-6 pt-7 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 pb-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#strona-glowna" className="inline-flex flex-col">
              <span className="text-2xl font-bold uppercase tracking-tight">
                Dach <span className="text-red-500">Expert</span>
              </span>

              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                Usługi dekarskie
              </span>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-gray-400">
              Profesjonalne usługi dekarskie dla domów jednorodzinnych i
              obiektów firmowych.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-sm font-bold text-gray-300 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-sm font-bold text-gray-300 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                ig
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Nawigacja
            </h3>

            <nav className="mt-6 flex flex-col items-start gap-3">
              <a
                href="#strona-glowna"
                className="text-sm text-gray-400 transition-colors hover:text-red-500"
              >
                Strona główna
              </a>

              <a
                href="#o-nas"
                className="text-sm text-gray-400 transition-colors hover:text-red-500"
              >
                O nas
              </a>

              <a
                href="#oferta"
                className="text-sm text-gray-400 transition-colors hover:text-red-500"
              >
                Oferta
              </a>

              <a
                href="#realizacje"
                className="text-sm text-gray-400 transition-colors hover:text-red-500"
              >
                Realizacje
              </a>

              <a
                href="#opinie"
                className="text-sm text-gray-400 transition-colors hover:text-red-500"
              >
                Opinie
              </a>

              <a
                href="/kontakt"
                className="text-sm text-gray-400 transition-colors hover:text-red-500"
              >
                Kontakt
              </a>
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h3>

            <address className="mt-6 flex flex-col items-start gap-4 not-italic">
              <a
                href="tel:+48500800600"
                className="text-gray-400 transition-colors hover:text-red-500"
              >
                500 800 600
              </a>

              <a
                href="mailto:kontakt@dachexpert.pl"
                className="text-gray-400 transition-colors hover:text-red-500"
              >
                kontakt@dachexpert.pl
              </a>

              <p className="text-gray-400">Małopolska i okolice</p>
            </address>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Godziny pracy
            </h3>

            <div className="mt-6 space-y-4 text-gray-400">
              <div className="flex justify-between gap-6">
                <span>Pon.–Pt.</span>
                <span className="text-gray-200">7:00–17:00</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>Sobota</span>
                <span className="text-gray-200">Nieczynne</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>Niedziela</span>
                <span className="text-gray-200">Nieczynne</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 py-3 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} Dach Expert. Wszelkie prawa zastrzeżone.</p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="/polityka-prywatnosci"
                className="transition-colors hover:text-red-500"
              >
                Polityka prywatności
              </a>

              <a
                href="#strona-glowna"
                aria-label="Wróć na górę strony"
                className="flex h-10 w-10 items-center justify-center bg-red-600 text-lg text-white transition-colors hover:bg-red-700"
              >
                ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
