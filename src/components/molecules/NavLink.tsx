import { Link, useLocation } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export function NavLink({ to, children, className = "" }: Props) {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={
        "relative rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] transition-all duration-300 " +
        (isActive
          ? "bg-white/8 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_24px_rgba(0,0,0,0.18)] "
          : "text-white/74 hover:bg-white/6 hover:text-white ") +
        className
      }
    >
      {children}
    </Link>
  );
}
