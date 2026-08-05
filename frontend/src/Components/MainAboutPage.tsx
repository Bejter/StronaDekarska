import aboutRoof from "../assets/Dachbg.jpg";

function MainAboutPage() {
  return (
    <div id="about-us">
      <div className="mb-12 max-w-3x1">
        <p className="mb-4 border-1-2 border-red-600 pl-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Poznaj FPH. U Paweł Talarczyk
        </p>

        <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
          Dach wykonany raz.
          <span className="block">Dach wykonany dobrze.</span>
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={aboutRoof}
            alt="Przykładowa realizacja dachu"
            className="h-80 w-full object-cover md:h-112.5"
          />

          <div className="absolute left-0 top-0 h-20 w-1 bg-red-600" />
        </div>

        <div>
          <p className="text-lg leading-8 text-gray-300">
            Dach Expert to zespół doświadczonych specjalistów, dla których dach
            to coś więcej niż konstrukcja — to ochrona, bezpieczeństwo i spokój
            na lata.
          </p>

          <p className="mt-4 leading-7 text-gray-400">
            Stawiamy na jakość, rzetelność i uczciwe podejście do każdego
            projektu — niezależnie od jego skali.
          </p>

          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            <div className="flex gap-4 py-5">
              <span className="text-xl font-bold text-red-500">01</span>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Doświadczenie
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Wieloletnia praktyka i setki zrealizowanych projektów.
                </p>
              </div>
            </div>

            <div className="flex gap-4 py-5">
              <span className="text-xl font-bold text-red-500">02</span>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Solidne materiały
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Korzystamy z produktów sprawdzonych producentów.
                </p>
              </div>
            </div>

            <div className="flex gap-4 py-5">
              <span className="text-xl font-bold text-red-500">03</span>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Terminowość
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Dotrzymujemy ustaleń i pracujemy zgodnie z harmonogramem.
                </p>
              </div>
            </div>
          </div>

          <a
            href="#kontakt"
            className="mt-8 inline-block bg-red-600 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-red-700"
          >
            Dowiedz się więcej
          </a>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 border-y border-white/10 md:grid-cols-4">
        <div className="border-b border-r border-white/10 px-4 py-8 md:border-b-0">
          <strong className="block text-4xl font-bold text-white">15+</strong>
          <span className="mt-2 block text-xs uppercase tracking-wider text-gray-400">
            Lat doświadczenia
          </span>
        </div>

        <div className="border-b border-white/10 px-4 py-8 md:border-b-0 md:border-r">
          <strong className="block text-4xl font-bold text-white">250+</strong>
          <span className="mt-2 block text-xs uppercase tracking-wider text-gray-400">
            Wykonanych dachów
          </span>
        </div>

        <div className="border-r border-white/10 px-4 py-8">
          <strong className="block text-4xl font-bold text-white">10</strong>
          <span className="mt-2 block text-xs uppercase tracking-wider text-gray-400">
            lat gwarancji
          </span>
        </div>

        <div className="px-4 py-8">
          <strong className="block text-4xl font-bold text-white">100%</strong>
          <span className="mt-2 block text-xs uppercase tracking-wider text-gray-400">
            zaangażowania
          </span>
        </div>
      </div>
    </div>
  );
}

export default MainAboutPage;
