import { useState } from "react";

import Navbar from "../Components/Navbar";
import FooterComponent from "../Components/FooterComponent";

import pic1 from "../assets/GalleryPictures/Pic1.jpg";
import pic2 from "../assets/GalleryPictures/Pic2.JPG";
import pic3 from "../assets/GalleryPictures/Pic3.JPG";
import pic4 from "../assets/GalleryPictures/Pic4.JPG";
import pic5 from "../assets/GalleryPictures/Pic5.JPG";
import pic6 from "../assets/GalleryPictures/Pic6.JPG";
import pic7 from "../assets/GalleryPictures/Pic7.JPG";
import pic8 from "../assets/GalleryPictures/Pic8.JPG";
import pic9 from "../assets/GalleryPictures/Pic9.JPG";

import team1 from "../assets/GalleryPictures/Pic17.JPG";
import team2 from "../assets/GalleryPictures/Pic32.JPG";
import team3 from "../assets/GalleryPictures/Pic64.JPG";

type ProjectCategory =
  | "Wszystkie"
  | "Dekarstwo"
  | "Ciesielstwo"
  | "Wymiany dachów"
  | "Remonty"
  | "Kamienice";

type Project = {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "Wszystkie">;
  image: string;
  imageClassName?: string;
};

const categories: ProjectCategory[] = [
  "Wszystkie",
  "Dekarstwo",
  "Ciesielstwo",
  "Wymiany dachów",
  "Remonty",
  "Kamienice",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Wykonanie pokrycia dachowego",
    category: "Dekarstwo",
    image: pic1,
    imageClassName: "sm:row-span-2",
  },
  {
    id: 2,
    title: "Konstrukcja więźby dachowej",
    category: "Ciesielstwo",
    image: pic2,
  },
  {
    id: 3,
    title: "Kompleksowa wymiana dachu",
    category: "Wymiany dachów",
    image: pic3,
  },
  {
    id: 4,
    title: "Remont pokrycia dachowego",
    category: "Remonty",
    image: pic4,
    imageClassName: "sm:row-span-2",
  },
  {
    id: 5,
    title: "Prace przy dachu kamienicy",
    category: "Kamienice",
    image: pic5,
  },
  {
    id: 6,
    title: "Montaż nowego pokrycia",
    category: "Dekarstwo",
    image: pic6,
  },
  {
    id: 7,
    title: "Elementy konstrukcji dachowej",
    category: "Ciesielstwo",
    image: pic7,
  },
  {
    id: 8,
    title: "Modernizacja istniejącego dachu",
    category: "Remonty",
    image: pic8,
  },
  {
    id: 9,
    title: "Wymiana pokrycia dachowego",
    category: "Wymiany dachów",
    image: pic9,
  },
];

const team = [
  {
    title: "Paweł Talarczyk",
    description: "15 lat doświadczenia w branży",
    image: team1,
    alt: "Prace wykonywane przez firmę Paweł Talarczyk Dachy",
  },
  {
    title: "Ekipa dekarska",
    description: "Pokrycia, wymiany i remonty dachów",
    image: team2,
    alt: "Realizacja prac dekarskich",
  },
  {
    title: "Ekipa ciesielska",
    description: "Konstrukcje i więźby dachowe",
    image: team3,
    alt: "Realizacja prac ciesielskich",
  },
];

function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("Wszystkie");

  const visibleProjects =
    selectedCategory === "Wszystkie"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main>
        <section className="relative flex min-h-[62vh] items-end overflow-hidden">
          <img
            src={pic9}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/85 to-gray-950/25" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-24">
            <div className="max-w-3xl">
              <p className="mb-5 border-l-2 border-red-600 pl-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Nasze realizacje
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                Dachy wykonane z dbałością o każdy detal.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
                Zobacz wybrane prace dekarskie i ciesielskie zrealizowane w
                Krakowie oraz okolicach.
              </p>
            </div>
          </div>
        </section>

        <section
          className="px-6 py-20 lg:px-8 lg:py-28"
          aria-labelledby="realizacje-title"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Wybrane realizacje
              </p>

              <h2
                id="realizacje-title"
                className="mt-4 text-3xl font-bold sm:text-4xl"
              >
                Zobacz efekty naszej pracy.
              </h2>

              <p className="mt-4 text-gray-400">Kraków i okolice</p>
            </div>

            <div
              className="mt-12 flex gap-3 overflow-x-auto border-b border-white/10 pb-4"
              role="group"
              aria-label="Filtrowanie realizacji"
            >
              {categories.map((category) => {
                const isSelected = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedCategory(category)}
                    className={[
                      "shrink-0 border-b-2 px-4 py-3 text-sm font-semibold transition-colors",
                      isSelected
                        ? "border-red-600 text-red-500"
                        : "border-transparent text-gray-400 hover:text-white",
                    ].join(" ")}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {visibleProjects.length > 0 ? (
              <div className="mt-12 grid auto-rows-72 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project) => (
                  <article
                    key={project.id}
                    className={[
                      "group relative overflow-hidden bg-gray-900",
                      project.imageClassName ?? "",
                    ].join(" ")}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} – ${project.category}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">
                        {project.category}
                      </span>

                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="mt-12 text-center text-gray-400">
                Brak realizacji w wybranej kategorii.
              </p>
            )}
          </div>
        </section>

        <section
          className="bg-stone-100 px-6 py-20 text-gray-950 lg:px-8 lg:py-28"
          aria-labelledby="wyrozniona-realizacja"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative">
              <img
                src={pic3}
                alt="Detal wykonanego pokrycia dachowego"
                loading="lazy"
                className="h-96 w-full object-cover lg:h-136"
              />

              <div className="absolute left-0 top-0 h-24 w-1 bg-red-600" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Zakres wykonywanych prac
              </p>

              <h2
                id="wyrozniona-realizacja"
                className="mt-4 text-3xl font-bold leading-tight sm:text-4xl"
              >
                Kompleksowo od konstrukcji po wykończenie.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Realizacje mogą obejmować zarówno wykonanie konstrukcji
                ciesielskiej, jak i wymianę pokrycia oraz prace związane z
                remontem istniejącego dachu.
              </p>

              <ul className="mt-8 divide-y divide-gray-300 border-y border-gray-300">
                {[
                  "Prace dekarskie",
                  "Prace ciesielskie",
                  "Wymiana pokrycia dachowego",
                  "Remont dachu",
                  "Prace przy kamienicach",
                ].map((item, index) => (
                  <li key={item} className="flex items-center gap-4 py-4">
                    <span
                      className="text-sm font-bold text-red-600"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="px-6 py-20 lg:px-8 lg:py-28"
          aria-labelledby="team-heading"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Nasza ekipa
                </p>

                <h2
                  id="team-heading"
                  className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
                >
                  Ludzie, którzy znają dachy od podstaw.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-gray-400 lg:justify-self-end">
                Za każdą realizacją stoi praktyczne doświadczenie, sprawna
                współpraca oraz odpowiedzialność za każdy etap wykonywanych
                prac.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {team.map((item, index) => (
                <article
                  key={item.title}
                  className="group overflow-hidden border border-white/10 bg-white/3"
                >
                  <div className="relative aspect-4/5 overflow-hidden bg-gray-900">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/10 to-transparent" />

                    <span
                      className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center bg-red-600 text-sm font-bold text-white"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="border-t border-white/10 p-6">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterComponent />
    </div>
  );
}

export default RealisationsPage;
