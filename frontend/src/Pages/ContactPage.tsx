import type { FormEvent } from "react";

import Navbar from "../Components/Navbar";
import FooterComponent from "../Components/FooterComponent";

import contactHero from "../assets/GalleryPictures/Pic8.JPG";

const services = [
  "Dekarstwo",
  "Ciesielstwo",
  "Wymiana dachu",
  "Remont dachu",
  "Remont lub nadbudowa kamienicy",
  "Inny zakres prac",
];

const contactSteps = [
  {
    number: "01",
    title: "Kontakt",
    description:
      "Przesyłasz podstawowe informacje o budynku i planowanych pracach.",
  },
  {
    number: "02",
    title: "Rozmowa o zakresie",
    description: "Poznajemy Twoje potrzeby i omawiamy możliwe rozwiązania.",
  },
  {
    number: "03",
    title: "Kolejne kroki",
    description:
      "Ustalamy dalszy przebieg współpracy odpowiedni do danego zlecenia.",
  },
];

function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Tutaj później podłączymy wysyłkę do API lub usługi formularzy.
    console.log("Formularz jest gotowy do podłączenia");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main>
        <section className="relative min-h-[65vh] overflow-hidden">
          <div className="grid min-h-[65vh] lg:grid-cols-2">
            <div className="relative z-10 flex items-end bg-gray-950 px-6 pb-20 pt-36 lg:px-8 lg:pb-24">
              <div className="mx-auto w-full max-w-xl lg:ml-auto lg:mr-16">
                <p className="mb-5 border-l-2 border-red-600 pl-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Kontakt
                </p>

                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Porozmawiajmy o Twoim dachu.
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
                  Opowiedz nam o planowanej budowie, wymianie lub remoncie
                  dachu. Działamy na terenie Krakowa i okolic.
                </p>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img
                src={contactHero}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-r from-gray-950/70 to-transparent" />
            </div>
          </div>
        </section>

        <section
          className="bg-stone-100 px-6 py-20 text-gray-950 lg:px-8 lg:py-28"
          aria-labelledby="contact-form-title"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Napisz do nas
              </p>

              <h2
                id="contact-form-title"
                className="mt-4 text-3xl font-bold leading-tight sm:text-4xl"
              >
                Opowiedz nam o planowanych pracach.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-gray-600">
                Wypełnij formularz, podając podstawowe informacje o inwestycji.
                Pola oznaczone gwiazdką są wymagane.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-10 grid gap-6 sm:grid-cols-2"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Imię i nazwisko *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="min-h-12 w-full border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Telefon lub e-mail *
                  </label>

                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    required
                    aria-describedby="contact-help"
                    className="min-h-12 w-full border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                  />

                  <p
                    id="contact-help"
                    className="mt-2 text-xs leading-5 text-gray-500"
                  >
                    Podaj sposób, w jaki możemy się z Tobą skontaktować.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Miejscowość
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="address-level2"
                    className="min-h-12 w-full border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Rodzaj usługi
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="min-h-12 w-full border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                  >
                    <option value="" disabled>
                      Wybierz rodzaj usługi
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Wiadomość *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    placeholder="Napisz krótko, jakich prac potrzebujesz i czego dotyczy inwestycja."
                    className="w-full resize-y border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="privacyConsent"
                      required
                      className="mt-1 h-4 w-4 shrink-0 accent-red-600"
                    />

                    <span className="text-sm leading-6 text-gray-600">
                      Wyrażam zgodę na wykorzystanie podanych danych w celu
                      udzielenia odpowiedzi na moje zapytanie. *
                    </span>
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex min-h-13 w-full items-center justify-center bg-red-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 sm:w-auto"
                  >
                    Wyślij zapytanie
                    <span className="ml-3 text-lg" aria-hidden="true">
                      →
                    </span>
                  </button>
                </div>
              </form>
            </div>

            <aside
              className="space-y-6 lg:pt-16"
              aria-label="Informacje kontaktowe"
            >
              <div className="border border-gray-200 bg-white p-7">
                <span
                  className="relative flex h-14 w-14 items-center justify-center border border-gray-800 bg-gray-950 text-red-500 shadow-[4px_4px_0_#dc2626]"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6.75h16v10.5H4z" />
                    <path d="m4.5 7.25 7.5 6 7.5-6" />
                  </svg>
                </span>

                <h2 className="mt-6 text-xl font-bold">Kontakt</h2>

                <p className="mt-3 leading-7 text-gray-600">
                  Napisz za pomocą formularza. Podaj numer telefonu lub adres
                  e-mail, abyśmy mogli odpowiedzieć na Twoje zapytanie.
                </p>
              </div>

              <div className="border border-gray-200 bg-white p-7">
                <span
                  className="relative flex h-14 w-14 items-center justify-center border border-gray-800 bg-gray-950 text-red-500 shadow-[4px_4px_0_#dc2626]"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <h2 className="mt-6 text-xl font-bold">Obszar działania</h2>

                <strong className="mt-3 block text-lg">Kraków i okolice</strong>

                <p className="mt-3 leading-7 text-gray-600">
                  Skontaktuj się z nami, aby ustalić możliwość realizacji prac w
                  Twojej lokalizacji.
                </p>
              </div>
            </aside>
          </div>
        </section>
        <section
          className="relative overflow-hidden border-t border-white/10 bg-slate-900 px-6 py-20 lg:px-8 lg:py-28"
          aria-labelledby="next-steps-title"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-600/5 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Prosty kontakt
              </p>

              <h2
                id="next-steps-title"
                className="mt-4 text-3xl font-bold sm:text-4xl"
              >
                Co dzieje się dalej?
              </h2>
            </div>

            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {contactSteps.map((step) => (
                <li key={step.number} className="border-t border-white/15 pt-6">
                  <span className="text-4xl font-bold text-red-600">
                    {step.number}
                  </span>

                  <h3 className="mt-6 text-xl font-bold">{step.title}</h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <div
        aria-hidden="true"
        className="h-1 bg-linear-to-r from-gray-950 via-red-600 to-gray-950"
      />
      <FooterComponent hideContactCta />
    </div>
  );
}

export default ContactPage;
