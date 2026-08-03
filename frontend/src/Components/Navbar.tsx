function Navbar() {
    const navigation = [
        {label: "Strona główna", href: "#"},
        {label: "O nas", href: "#o-nas"},
        {label: "Oferta", href: "#oferta"},
        {label: "Realizacje", href: "#realizacje"},
        {label: "Opinie", href: "#opinie"},
        {label: "Kontakt", href: "#kontakt"}
    ];

    return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/30 backdrop-blur-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex flex-col">
          <span className="text-xl font-bold uppercase tracking-tight text-white">
            Dach <span className="text-red-500">Expert</span>
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400">
            Usługi dekarskie
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-red-500"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+48500800600"
          className="hidden items-center gap-3 text-sm font-bold text-white md:flex"
        >
          <span className="text-lg text-red-500">☎</span>
          <span>500 800 600</span>
        </a>

        <button
          type="button"
          aria-label="Otwórz menu"
          className="flex h-10 w-10 items-center justify-center border border-white/20 text-2xl text-white lg:hidden"
        >
          ☰
        </button>
      </nav>
    </header>
    );
}

export default Navbar;