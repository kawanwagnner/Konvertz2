import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // Offsets CSS vars
  useEffect(() => {
    const root = document.documentElement;
    const headerEl = headerRef.current as HTMLElement | null;
    function setOffsets() {
      const cpa = document.getElementById("cpa-bar");
      const cpaH = cpa ? cpa.offsetHeight : 0;
      const headerH = headerEl ? headerEl.offsetHeight : 64;
      root.style.setProperty("--cpa-h", `${cpaH}px`);
      root.style.setProperty("--header-h", `${headerH}px`);
    }
    setOffsets();
    const onResize = () => {
      window.requestAnimationFrame(setOffsets);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("load", setOffsets);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", setOffsets);
    };
  }, []);

  // Hide on scroll down
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let last = 0;
    const threshold = 100;
    const onScroll = () => {
      const cur = window.pageYOffset || document.documentElement.scrollTop;
      if (Math.abs(cur - last) < 5) return;
      if (cur <= 10) {
        header.style.transform = "translateY(0)";
        header.classList.add("shadow-md");
      } else if (cur > last && cur > threshold) {
        header.style.transform = "translateY(-200%)";
        header.classList.remove("shadow-md");
      } else {
        header.style.transform = "translateY(0)";
        header.classList.add("shadow-md");
      }
      last = cur;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      const btn = document.getElementById("mobile-menu-button");
      if (!menu || !btn) return;
      if (open && !menu.contains(e.target as Node) && e.target !== btn)
        setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <header
      ref={headerRef as any}
      style={{ top: "var(--cpa-h, 0px)" }}
      className="fixed w-full bg-power-blue/95 backdrop-blur-md shadow-xl z-50"
    >
      <div className="w-full">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center z-50">
            <div className="w-10 h-10 bg-lightning rounded-lg flex items-center justify-center">
              <span className="text-power-blue font-black text-xl">KZ</span>
            </div>
            <span className="hidden md:inline-block text-2xl font-black text-white ml-2">
              KONVERTZ
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center absolute left-1/2 -translate-x-1/2 space-x-8 z-40">
            <a
              href="#vantagens"
              className="text-white hover:text-lightning transition font-medium group"
            >
              <span className="group-hover:border-b-2 group-hover:border-lightning pb-1">
                Vantagens
              </span>
            </a>
            <a
              href="#processo"
              className="text-white hover:text-lightning transition font-medium group"
            >
              <span className="group-hover:border-b-2 group-hover:border-lightning pb-1">
                Como Funciona
              </span>
            </a>
            <a
              href="#provas"
              className="text-white hover:text-lightning transition font-medium group"
            >
              <span className="group-hover:border-b-2 group-hover:border-lightning pb-1">
                Resultados
              </span>
            </a>
            <a
              href="#lei"
              className="text-white hover:text-lightning transition font-medium group"
            >
              <span className="group-hover:border-b-2 group-hover:border-lightning pb-1">
                É Confiável?
              </span>
            </a>
            <a
              href="#faq"
              className="text-white hover:text-lightning transition font-medium group"
            >
              <span className="group-hover:border-b-2 group-hover:border-lightning pb-1">
                Dúvidas
              </span>
            </a>
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center space-x-2 z-50">
            <a
              href="#form"
              className="hidden md:flex bg-lightning hover:bg-white text-power-blue font-bold px-6 py-3 rounded-full transition shadow-lg hover:shadow-lightning/40 items-center"
            >
              <span className="mr-2">📊</span>
              SIMULAR ECONOMIA
            </a>
            <a
              href="#form"
              className="md:hidden bg-lightning hover:bg-white text-power-blue font-bold px-4 py-2 rounded-full transition shadow-lg hover:shadow-lightning/40 flex items-center"
            >
              <span className="mr-1">📊</span>
              SIMULAR
            </a>
            <button
              id="mobile-menu-button"
              className="xl:hidden p-2 text-white"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`xl:hidden ${
          open ? "" : "hidden"
        } bg-power-blue/95 backdrop-blur-lg w-full fixed left-0 right-0 z-40`}
        style={{ top: "calc(var(--cpa-h, 0px) + var(--header-h, 64px))" }}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          {[
            { href: "#vantagens", label: "Vantagens" },
            { href: "#processo", label: "Como Funciona" },
            { href: "#provas", label: "Resultados" },
            { href: "#lei", label: "É Confiável?" },
            { href: "#faq", label: "Dúvidas" },
          ].map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="text-white hover:text-lightning py-2 border-b border-lightning/20"
            >
              {i.label}
            </a>
          ))}
          <a
            href="#form"
            onClick={() => setOpen(false)}
            className="bg-lightning hover:bg-white text-power-blue font-bold py-3 px-4 rounded-full text-center mt-2"
          >
            SIMULAR ECONOMIA
          </a>
        </div>
      </div>
    </header>
  );
}
