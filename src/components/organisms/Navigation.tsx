import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../atoms/Logo";
import { ButtonPrimary } from "../atoms/ButtonPrimary";
import { NavLink } from "../molecules/NavLink";

const navItems = [
  { to: "/", label: "About" },
  { to: "/meet-holly", label: "Meet Holly" },
  { to: "/artist-development", label: "Academy" },
  { to: "/studio-sessions", label: "Studio" },
  { to: "/instrumentals", label: "Music" },
  { to: "/contacts", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="site-header sticky top-0 z-50 border-b border-white/10 bg-[#14100c] shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:h-20 lg:px-8">
          <Link
            to="/"
            className="flex min-w-0 shrink-0 items-center gap-2"
            aria-label="NuRock Home"
            onClick={() => setIsOpen(false)}
          >
            <Logo to={undefined} className="hidden sm:block" />
            <span className="truncate text-[0.68rem] font-black uppercase tracking-[0.34em] text-white sm:text-[0.72rem] sm:hidden">
              NuRock
            </span>
            <span className="hidden truncate text-[0.72rem] font-black uppercase tracking-[0.34em] text-white sm:inline lg:hidden">
              NuRock Entertainment
            </span>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/4 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.18)] lg:flex">
            {navItems.map(({ to, label }) => (
              <NavLink key={to} to={to}>
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link to="/studio-sessions#book" className="hidden md:inline-flex">
              <ButtonPrimary>Book Session</ButtonPrimary>
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white lg:hidden"
            >
              <span className="material-symbols-outlined text-[1.35rem]">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {isOpen ? (
        <div className="site-mobile-menu fixed inset-x-4 z-40 rounded-[1.25rem] border border-white/10 bg-[#1d1813] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.55)] lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-base-content/82 transition-colors hover:bg-white/5 hover:text-white"
              >
                {label}
              </Link>
            ))}
            <Link to="/studio-sessions#book" onClick={() => setIsOpen(false)} className="pt-2 md:hidden">
              <ButtonPrimary className="w-full justify-center">Book Session</ButtonPrimary>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
