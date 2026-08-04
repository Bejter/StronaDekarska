import { useState } from "react";

import beforePhoto from "../assets/GalleryPictures/Pic14.JPG";
import afterPhoto from "../assets/GalleryPictures/Pic26.JPG";
import galleryPhotoOne from "../assets/GalleryPictures/Pic1.jpg";
import galleryPhotoTwo from "../assets/GalleryPictures/Pic2.JPG";

function MainGalleryPage() {
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
        <div id="realizacje">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="mb-4 border-l-2 border-red-600 pl-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                        Nasze realizacje
                    </p>

                    <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                        Dachy, które mówią same za siebie.
                    </h2>
                </div>

                <div className="max-w-md">
                    <p className="mb-4 leading-7 text-gray-400">
                        Zobacz wybrane realizacje i efekty naszej pracy.
                    </p>

                    <a href="/realizacje" className="text-sm font-semibold uppercase tracking-wider text-red-500 transition-colors hover:text-red-400">
                        Zobacz wszystkie realizacje →
                    </a>
                </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-3">
                <div className="relative h-105 overflow-hidden lg:col-span-2 lg:h-162.5">
                    <img src={beforePhoto} alt="Dach przed wykonaniem prac" className="absolute inset-0 h-full w-full object-cover"/>
                    <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
                        <img src={afterPhoto} alt="Dach po wykonaniu prac" className="absolute inset-0 h-full max-w-none object-cover" style={{ width: "100vw" }} />
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${sliderPosition}%` }}>
                        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-red-600 text-lg font-bold text-white shadow-lg">
                            ↔
                        </div>
                    </div>
                    <input type="range" min="0" max="100" value={sliderPosition} onChange={(event) => setSliderPosition(Number(event.target.value))} aria-label="Porównaj zdjęcie przed i po" className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0" />

                    <span className="pointer-events-none absolute bottom-5 left-5 z-10 bg-black/70 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white"> Przed </span>
                    <span className="pointer-events-none absolute bottom-5 right-5 z-10 bg-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white">Po</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <a href="/realizacje" className="group relative h-75 overflow-hidden lg:h-auto">
                        <img src={galleryPhotoOne} alt="Renowacja pokrycia dachowego" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6">
                            <span className="text-sm font-bold text-red-500">02</span>
                            <h3 className="mt-2 text-xl font-semibold text-white">Renowacja pokrycia</h3>
                            <p className="mt-1 text-sm text-gray-300">Kompleksowa wymiana dachu</p>
                        </div>
                    </a>
                    <a href="/realizacje" className="group relative h-75 overflow-hidden lg:h-auto">
                        <img src={galleryPhotoTwo} alt="Montaż elementów dachowych" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />

                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6">
                            <span className="text-sm font-bold text-red-500">03</span>
                            <h3 className="mt-2 text-xl font-semibold text-white"> Obróbki dachowe </h3>
                            <p className="mt-1 text-sm text-gray-300">Dokładne wykonanie detali</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );    
}

export default MainGalleryPage;