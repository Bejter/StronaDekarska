import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { label: "Strona główna", href: "/" },
    { label: "O nas", href: "/o-nas" },
    { label: "Realizacje", href: "/realizacje" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  useEffect(() => {
    const closeMenuWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeMenuWithEscape);
    return () => window.removeEventListener("keydown", closeMenuWithEscape);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/30 backdrop-blur-sm">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-white px-4 py-3 font-semibold text-gray-950 transition-transform focus:translate-y-0"
      >
        Przejdź do treści
      </a>
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex flex-col"
          aria-label="Paweł Talarczyk Dachy — strona główna"
        >
          <span className="text-base font-bold uppercase tracking-tight text-white min-[380px]:text-lg sm:text-xl">
            Paweł Talarczyk <span className="text-red-500">Dachy</span>
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400">
            Usługi dekarskie
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              aria-current={
                location.pathname === item.href ? "page" : undefined
              }
              className="text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-red-500"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="tel:+48664983540"
          className="hidden items-center gap-3 text-sm font-bold text-white lg:flex"
        >
          <span className="text-lg text-red-500" aria-hidden="true">☎</span>
          <span>664 983 540</span>
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-2xl text-white transition-colors hover:border-red-500 hover:text-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 lg:hidden"
        >
          <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        className={`overflow-hidden border-t border-white/10 bg-gray-950/98 transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-128 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6 sm:py-4"
          aria-label="Nawigacja mobilna"
        >
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.label}
                to={item.href}
                aria-current={isActive ? "page" : undefined}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => setIsMenuOpen(false)}
                className={`flex min-h-13 items-center border-b border-white/10 text-sm font-semibold uppercase tracking-wide transition-colors last:border-b-0 ${
                  isActive ? "text-red-500" : "text-white/85 hover:text-red-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href="tel:+48664983540"
            tabIndex={isMenuOpen ? 0 : -1}
            className="mt-4 flex min-h-12 items-center justify-center bg-red-600 px-6 text-sm font-bold text-white transition-colors hover:bg-red-700 md:hidden"
          >
            Zadzwoń: 664 983 540
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
