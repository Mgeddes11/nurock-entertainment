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
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(20,16,12,0.96)] shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl pt-[env(safe-area-inset-top,0px)]">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-4 sm:h-20 sm:px-6 lg:h-24 lg:px-8">
          <div className="flex shrink-0 items-center gap-3">
            <Logo to="/" className="transition-transform duration-300 hover:scale-[1.02]" />
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/4 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.18)] lg:flex">
            {navItems.map(({ to, label }) => (
              <NavLink key={to} to={to}>
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link to="/studio-sessions" className="hidden md:inline-flex">
              <ButtonPrimary>Book Session</ButtonPrimary>
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11 rounded-full border border-white/10 bg-white/4 text-base-content transition-all duration-300 hover:border-primary/40 hover:bg-white/8 lg:hidden"
            >
              <span className="material-symbols-outlined text-[1.35rem]">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={
          "nav-drawer-top fixed inset-x-4 z-40 rounded-[1.75rem] panel-surface p-4 transition-all duration-300 lg:hidden " +
          (isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0")
        }
      >
        <div className="flex flex-col gap-2">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-base-content/78 transition-all duration-300 hover:border-white/8 hover:bg-white/5 hover:text-white"
            >
              {label}
            </Link>
          ))}
          <Link to="/studio-sessions" onClick={() => setIsOpen(false)} className="pt-2 md:hidden">
            <ButtonPrimary className="w-full justify-center">Book Session</ButtonPrimary>
          </Link>
        </div>
      </div>
    </>
  );
}
