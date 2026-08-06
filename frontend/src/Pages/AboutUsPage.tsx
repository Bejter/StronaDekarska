import Navbar from "../Components/Navbar";
import FooterComponent from "../Components/FooterComponent";

import heroImage from "../assets/GalleryPictures/Pic17.JPG";
import historyImage from "../assets/GalleryPictures/Pic32.JPG";

const values = [
  {
    number: "01",
    title: "Doświadczenie",
    description:
      "15 lat praktyki pozwala nam sprawnie oceniać stan dachu i dobierać odpowiednie rozwiązania.",
  },
  {
    number: "02",
    title: "Rzetelność",
    description:
      "Każde zlecenie realizujemy z dbałością o ustalenia, jakość wykonania i najważniejsze detale.",
  },
  {
    number: "03",
    title: "Kompleksowe podejście",
    description:
      "Patrzymy na dach jako całość — od konstrukcji ciesielskiej po pokrycie i prace remontowe.",
  },
  {
    number: "04",
    title: "Lokalna znajomość",
    description:
      "Działamy na terenie Krakowa i okolic, realizując prace przy różnych rodzajach budynków.",
  },
];

const services = [
  "Dekarstwo",
  "Ciesielstwo",
  "Wymiana dachów",
  "Remonty dachów",
  "Remonty i nadbudowy kamienic",
];

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main>
        <section className="relative flex min-h-[75vh] items-end overflow-hidden">
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/85 to-gray-950/30" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28">
            <div className="max-w-3xl">
              <p className="mb-5 border-l-2 border-red-600 pl-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                O nas
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                Doświadczenie, które widać w każdym dachu.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
                Paweł Talarczyk Dachy to 15 lat doświadczenia w realizacji prac
                dekarskich i ciesielskich na terenie Krakowa i okolic.
              </p>
            </div>
          </div>
        </section>

        {/* HISTORIA */}
        <section
          className="px-6 py-20 lg:px-8 lg:py-28"
          aria-labelledby="historia-firmy"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative">
              <img
                src={historyImage}
                alt="Prace przy konstrukcji i pokryciu dachu"
                className="h-96 w-full object-cover sm:h-136"
              />

              <div className="absolute bottom-0 left-0 bg-red-600 px-7 py-6">
                <strong className="block text-4xl font-bold">15 lat</strong>

                <span className="mt-1 block text-sm text-red-50">
                  działalności
                </span>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Nasza historia
              </p>

              <h2
                id="historia-firmy"
                className="text-3xl font-bold leading-tight sm:text-4xl"
              >
                Fachowa wiedza poparta wieloletnią praktyką.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Od 15 lat zajmujemy się realizacją prac dekarskich i
                ciesielskich. Zdobyte doświadczenie wykorzystujemy zarówno przy
                nowych dachach, jak i podczas wymagających remontów oraz
                modernizacji istniejących budynków.
              </p>

              <p className="mt-5 leading-7 text-gray-400">
                Każdą realizację rozpoczynamy od poznania stanu budynku i
                oczekiwanego zakresu prac. Pozwala nam to zaplanować kolejne
                etapy oraz dobrać rozwiązania odpowiednie do konkretnej
                konstrukcji.
              </p>

              <div className="mt-8 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-2">
                <div>
                  <strong className="block text-2xl font-bold text-white">
                    Kraków
                  </strong>
                  <span className="mt-1 block text-sm text-gray-400">
                    i okolice
                  </span>
                </div>

                <div>
                  <strong className="block text-2xl font-bold text-white">
                    Kompleksowo
                  </strong>
                  <span className="mt-1 block text-sm text-gray-400">
                    konstrukcja, pokrycie i remont
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-stone-100 px-6 py-20 text-gray-950 lg:px-8 lg:py-28"
          aria-labelledby="nasze-podejscie"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Zespół i podejście
              </p>

              <h2
                id="nasze-podejscie"
                className="text-3xl font-bold leading-tight sm:text-4xl"
              >
                Dobry dach zaczyna się od dobrej współpracy.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Łączymy praktyczne doświadczenie z odpowiedzialnym podejściem do
                każdego etapu realizacji.
              </p>
            </div>

            <div className="mt-12 grid border-l border-t border-gray-300 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <article
                  key={value.number}
                  className="border-b border-r border-gray-300 p-7"
                >
                  <span className="text-sm font-bold text-red-600">
                    {value.number}
                  </span>

                  <h3 className="mt-8 text-xl font-bold">{value.title}</h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="px-6 py-20 lg:px-8 lg:py-28"
          aria-labelledby="zakres-uslug"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Zakres usług
              </p>

              <h2
                id="zakres-uslug"
                className="text-3xl font-bold leading-tight sm:text-4xl"
              >
                Kompleksowe prace przy dachach i konstrukcjach.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Obsługujemy nowe realizacje, wymiany i remonty dachów, a także
                wymagające prace przy krakowskich kamienicach.
              </p>
            </div>

            <ol className="mt-12 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <li
                  key={service}
                  className="flex min-h-40 flex-col justify-between border-b border-r border-white/10 p-7 transition-colors hover:bg-white/5"
                >
                  <span className="text-sm font-bold text-red-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-10 text-xl font-semibold">{service}</h3>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <FooterComponent />
    </div>
  );
}

export default AboutUsPage;
