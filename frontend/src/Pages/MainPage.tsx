import Navbar from "../Components/Navbar";
import heroRoofDesktop from "../assets/hero-roof-desktop.webp";
import heroRoofMobile from "../assets/hero-roof-mobile.webp";
import MainAboutPage from "../Components/MainAboutPage";
import MainGalleryPage from "../Components/MainGalleryPage";
import MainProcessPage from "../Components/MainProcessPage";
import FooterComponent from "../Components/FooterComponent";

function MainPage() {
  return (
    <main className="bg-gray-950">
      <section id="strona-glowna" className="relative  min-h-screen ">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroRoofDesktop} />
          <img
            src={heroRoofMobile}
            alt=""
            width={960}
            height={409}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-black/50" />
        <Navbar />

        <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl items-center px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:px-8">
          <div className="flex w-full max-w-xl flex-col items-start">
            <h1 className="text-left text-4xl font-bold uppercase leading-[1.08] text-white min-[380px]:text-5xl lg:text-6xl">
              Solidne dachy
              <span className="block">na lata</span>
            </h1>
            <p className="mt-5 text-left text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Kompleksowe usługi dekarskie
              <span className="block">dla domu i przemysłu</span>
            </p>
            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a
                href="https://www.facebook.com/permalink.php?story_fbid=pfbid0ZfCUhHVoQnruZzbvkyNKd6uDi4b9Mj8HNQPxZyJcRpF6W23DECDcHMRrt3TESLuxl&id=61592836629797&rdid=V33G6SFHH9uWKaMK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 w-full items-center justify-center rounded border-2 border-red-600 bg-red-600 px-6 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-transparent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500 sm:w-auto sm:px-8 lg:px-10"
              >
                Sprawdź ofertę
              </a>
              <a
                href="/realizacje"
                className="flex min-h-12 w-full items-center justify-center rounded border-2 border-red-600 bg-transparent px-6 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500 sm:w-auto sm:px-8 lg:px-10"
              >
                Zobacz realizacje
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-gray-950/95 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <MainAboutPage />
        </div>
      </section>

      <section className="relative z-20 bg-gray-950/95 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <MainGalleryPage />
        </div>
      </section>

      <section className="relative z-20 bg-gray-950/95 py-12 text-white sm:py-16 lg:py-20">
        <div>
          <MainProcessPage />
        </div>
      </section>

      <FooterComponent />
    </main>
  );
}

export default MainPage;
