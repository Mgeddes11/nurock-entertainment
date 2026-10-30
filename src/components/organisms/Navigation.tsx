import { Link } from "react-router-dom";
import { Logo } from "../atoms/Logo";
import { ButtonPrimary } from "../atoms/ButtonPrimary";
import { NavLink } from "../molecules/NavLink";
import { useCart } from "../../commerce/cartContext";
import { useShopChrome } from "../../hooks/useShopChrome";

const baseNavItems = [
  { to: "/", label: "About" },
  { to: "/meet-holly", label: "Meet Holly" },
  { to: "/artist-development", label: "Academy" },
  { to: "/studio-sessions", label: "Studio" },
  { to: "/instrumentals", label: "Music" },
  { to: "/contacts", label: "Contact" },
];

const shopNavItem = { to: "/shop", label: "Shop" };

export function Navigation() {
  const { count, openCart } = useCart();
  const showShop = useShopChrome();
  const navItems = showShop
    ? [
        ...baseNavItems.slice(0, 5),
        shopNavItem,
        ...baseNavItems.slice(5),
      ]
    : baseNavItems;

  return (
    <header
      className="site-header sticky top-0 z-50 border-b border-white/10 bg-[#14100c] shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between gap-3 sm:h-16 lg:h-20">
          <Link
            to="/"
            className="flex min-w-0 shrink-0 items-center gap-2"
            aria-label="NuRock Home"
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
            {showShop ? (
              <button
                type="button"
                onClick={openCart}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white"
                aria-label={`Open cart${count ? `, ${count} items` : ""}`}
              >
                <span className="material-symbols-outlined text-[1.25rem]">shopping_bag</span>
                {count > 0 ? (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[0.6rem] font-bold text-primary-content">
                    {count}
                  </span>
                ) : null}
              </button>
            ) : null}
            <Link to="/booking" className="hidden shrink-0 md:inline-flex">
              <ButtonPrimary>Book Session</ButtonPrimary>
            </Link>
          </div>
        </div>

        <div className="mobile-nav-bar -mx-4 border-t border-white/8 sm:-mx-6 lg:hidden">
          <div className="mobile-nav-scroll flex items-stretch gap-1 overflow-x-auto px-3 py-2 sm:px-5">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className="shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-[0.68rem] tracking-[0.18em]"
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/booking"
              className="shrink-0 whitespace-nowrap rounded-lg bg-primary px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-primary-content md:hidden"
            >
              Book
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
