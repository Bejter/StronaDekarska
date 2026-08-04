import Navbar from "../Components/Navbar";
import heroRoof from "../assets/hero-roof.png";
import MainAboutPage from "../Components/MainAboutPage";
import MainGalleryPage from "../Components/MainGalleryPage";
import MainProcessPage from "../Components/MainProcessPage";

function MainPage() {
  return (
    <main className="bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${heroRoof})` }}>
        <section id="strona-glowna" className="relative  min-h-screen ">
            <div className="absolute inset-0 bg-black/50" />
            <Navbar />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20 lg:px-8">
                <div className="flex max-w-xl flex-col h-100 items-start">
                    <h1 className="text-left text-5xl font-bold uppercase leading-tight text-white lg:text-6xl">
                        Solidne dachy
                        <span className="block">na lata</span>
                    </h1>
                    <p className="mt-5 text-left text-lg leading-8 text-slate-200">
                        Kompleksowe usługi dekarskie
                        <span className="block">dla domu i przemysłu</span>
                    </p>
                    <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                        <a href="#oferta" className="w-full rounded border-2 border-red-600 bg-red-600 px-10 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-transparent sm:w-auto">
                            Sprawdź ofertę
                        </a>
                        <a href="#realizacje" className="w-full rounded border-2 border-red-600 bg-transparent px-10 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-red-600 sm:w-auto">
                            Zobacz realizacje
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative z-20 min-h-screen bg-gray-950/95  px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">
                <MainAboutPage />
            </div>
        </section>


        <section className="relative z-20 min-h-screen bg-gray-950/95  px-6 py-15 text-white">
            <div className="mx-auto max-w-7xl">
                <MainGalleryPage />
            </div>
        </section>

        <section className="relative z-20 min-h-screen bg-gray-950/95  px-6 py-15 text-white">
            <div className="mx-auto max-w-7xl">
                <MainProcessPage />
            </div>
        </section>
    </main>
  );
}

export default MainPage;