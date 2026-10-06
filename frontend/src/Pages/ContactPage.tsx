import { ValidationError, useForm } from "@formspree/react";
import { useState } from "react";
import type { FormEvent } from "react";
import { contactValidationMessage } from "../contactValidation";

import Navbar from "../Components/Navbar";
import FooterComponent from "../Components/FooterComponent";

import contactHero from "../assets/GalleryPictures/Pic8.webp";

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
  const [contactError, setContactError] = useState("");
  const [formState, handleSubmit, resetForm] = useForm("meajnpdo", {
    data: {
      subject: "Nowe zapytanie ze strony Paweł Talarczyk Dachy",
      source: "Formularz kontaktowy",
    },
  });

  function validateContact(input: HTMLInputElement) {
    const error = contactValidationMessage(input.value);
    input.setCustomValidity(error);
    setContactError(error);
    return !error;
  }

  function submitContact(event: FormEvent<HTMLFormElement>) {
    const input = event.currentTarget.elements.namedItem("contact") as HTMLInputElement;
    input.value = input.value.trim();
    if (!validateContact(input)) {
      event.preventDefault();
      input.reportValidity();
      input.focus();
      return;
    }
    void handleSubmit(event);
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <section className="relative min-h-[65vh] overflow-hidden">
          <div className="grid min-h-[65vh] lg:grid-cols-2">
            <div className="relative z-10 flex items-end bg-gray-950 px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24">
              <div className="mx-auto w-full max-w-xl lg:ml-auto lg:mr-16">
                <p className="mb-5 border-l-2 border-red-600 pl-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Kontakt
                </p>

                <h1 className="text-3xl font-bold leading-tight min-[380px]:text-4xl sm:text-5xl lg:text-6xl">
                  Porozmawiajmy o Twoim dachu.
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
                  Opowiedz nam o planowanej budowie, wymianie lub remoncie
                  dachu. Działamy na terenie Małopolski.
                </p>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img
                src={contactHero}
                alt=""
                width={900}
                height={1200}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-r from-gray-950/70 to-transparent" />
            </div>
          </div>
        </section>

        <section
          className="bg-stone-100 px-4 py-16 text-gray-950 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
          aria-labelledby="contact-form-title"
        >
          <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
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

              {formState.succeeded ? (
                <div
                  role="status"
                  className="mt-8 border-l-4 border-green-600 bg-white p-6 sm:mt-10"
                >
                  <h3 className="text-xl font-bold text-gray-950">
                    Dziękujemy za wiadomość.
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Zapytanie zostało wysłane. Skontaktujemy się z Tobą po
                    zapoznaniu się z jego treścią.
                  </p>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-6 text-sm font-semibold uppercase tracking-wider text-red-600 transition-colors hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
                  >
                    Wyślij kolejne zapytanie
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={submitContact}
                  aria-busy={formState.submitting}
                  className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6"
                >
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="companyWebsite">Strona internetowa</label>
                    <input
                      id="companyWebsite"
                      name="_gotcha"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
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
                    aria-describedby="name-error"
                    className="min-h-12 w-full border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                  />

                  <div id="name-error">
                    <ValidationError
                      field="name"
                      prefix="Imię i nazwisko"
                      errors={formState.errors}
                      className="mt-2 text-sm text-red-600"
                    />
                  </div>
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
                    maxLength={254}
                    autoCapitalize="none"
                    spellCheck={false}
                    placeholder="664 983 540 lub jan@example.pl"
                    aria-invalid={contactError ? true : undefined}
                    onBlur={(event) => validateContact(event.currentTarget)}
                    onChange={(event) => {
                      event.currentTarget.setCustomValidity("");
                      setContactError("");
                    }}
                    onInvalid={(event) => validateContact(event.currentTarget)}
                    aria-describedby="contact-help contact-error"
                    className="min-h-12 w-full border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                  />

                  <p
                    id="contact-help"
                    className="mt-2 text-xs leading-5 text-gray-500"
                  >
                    Podaj sposób, w jaki możemy się z Tobą skontaktować.
                  </p>

                  <div id="contact-error">
                    {contactError && (
                      <p role="alert" className="mt-2 text-sm text-red-600">{contactError}</p>
                    )}
                    <ValidationError
                      field="contact"
                      prefix="Dane kontaktowe"
                      errors={formState.errors}
                      className="mt-2 text-sm text-red-600"
                    />
                  </div>
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
                    aria-describedby="message-error"
                    placeholder="Napisz krótko, jakich prac potrzebujesz i czego dotyczy inwestycja."
                    className="w-full resize-y border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                  />

                  <div id="message-error">
                    <ValidationError
                      field="message"
                      prefix="Wiadomość"
                      errors={formState.errors}
                      className="mt-2 text-sm text-red-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="privacyConsent"
                      value="Wyrażono zgodę"
                      required
                      className="mt-1 h-4 w-4 shrink-0 accent-red-600"
                    />

                    <span className="text-sm leading-6 text-gray-600">
                      Wyrażam zgodę na wykorzystanie podanych danych w celu
                      udzielenia odpowiedzi na moje zapytanie. *{" "}
                      <a
                        href="/polityka-prywatnosci"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-red-700 underline underline-offset-4 hover:text-red-800"
                      >
                        Informacja o prywatności (nowa karta)
                      </a>
                    </span>
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <ValidationError
                    role="alert"
                    errors={formState.errors}
                    className="mb-4 border border-red-300 bg-red-50 p-4 text-sm text-red-700"
                  />

                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className="inline-flex min-h-13 w-full items-center justify-center bg-red-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:bg-gray-500 sm:w-auto"
                  >
                    {formState.submitting ? "Wysyłanie..." : "Wyślij zapytanie"}
                    {!formState.submitting && (
                      <span className="ml-3 text-lg" aria-hidden="true">
                        →
                      </span>
                    )}
                  </button>
                </div>
                </form>
              )}
            </div>

            <aside
              className="space-y-6 lg:pt-16"
              aria-label="Informacje kontaktowe"
            >
              <div className="border border-gray-200 bg-white p-5 sm:p-7">
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

              <div className="border border-gray-200 bg-white p-5 sm:p-7">
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

                <strong className="mt-3 block text-lg">Małopolska</strong>

                <p className="mt-3 leading-7 text-gray-600">
                  Skontaktuj się z nami, aby ustalić możliwość realizacji prac w
                  Twojej lokalizacji.
                </p>
              </div>
            </aside>
          </div>
        </section>
        <section
          className="relative overflow-hidden border-t border-white/10 bg-slate-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
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

            <ol className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-3">
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
