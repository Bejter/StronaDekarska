const workSteps = [
  {
    number: "01",
    title: "Kontakt",
    description: "Rozmawiamy o zakresie prac i poznajemy Twoje potrzeby.",
  },
  {
    number: "02",
    title: "Oględziny i wycena",
    description:
      "Sprawdzamy dach, dobieramy rozwiązania i przygotowujemy przejrzystą ofertę.",
  },
  {
    number: "03",
    title: "Realizacja",
    description: "Wykonujemy prace zgodnie z ustalonym harmonogramem.",
  },
  {
    number: "04",
    title: "Odbiór",
    description: "Wspólnie sprawdzamy efekt i przekazujemy gwarancję.",
  },
];

function MainWorkProcess() {
  return (
    <section
      id="jak-pracujemy"
      className="relative overflow-hidden bg-stone-100 px-6 py-5 text-gray-950 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 border-l-2 border-red-600 pl-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Prosty proces
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Od pierwszego kontaktu
            <span className="block">do solidnego dachu.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Przejrzyste zasady i profesjonalne wykonanie na każdym etapie
            współpracy.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-3 hidden h-px bg-gray-300 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {workSteps.map((step) => (
              <article key={step.number} className="relative">
                <div className="relative z-10 mb-8 flex h-6 w-6 items-center justify-center rounded-full bg-stone-100">
                  <div className="h-3 w-3 rounded-full bg-red-600" />
                </div>
                <span className="block text-5xl font-bold text-red-600">
                  {" "}
                  {step.number}{" "}
                </span>
                <h3 className="mt-6 text-2xl font-bold"> {step.title} </h3>
                <p className="mt-3 max-w-xs leading-7 text-gray-600">
                  {" "}
                  {step.description}{" "}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-gray-300 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg text-gray-600">
            Masz pytania dotyczące realizacji? Porozmawiaj z nami przed
            podjęciem decyzji.
          </p>

          <a
            href="#kontakt"
            className="inline-flex items-center justify-center bg-red-600 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-red-700"
          >
            Umów bezpłatną wycenę
            <span className="ml-3 text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MainWorkProcess;
