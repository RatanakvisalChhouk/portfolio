import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const IDS = NAV.map((n) => n.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-page/90 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-semibold tracking-tight">
          Ratanakvisal Chhouk
        </a>

        <ul className="hidden gap-8 text-[0.95rem] md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={`transition-colors ${active === n.id ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="-mr-2 rounded-md px-2 py-1 text-[0.95rem] text-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul id="mobile-nav" className="border-t border-line px-6 pb-4 md:hidden">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-lg">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
