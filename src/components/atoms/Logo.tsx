import { Link } from "react-router-dom";

type Props = {
  to?: string;
  className?: string;
  /** "light" = white logo (dark bg), "dark" = black logo (light bg). Default light. */
  variant?: "light" | "dark";
};

export function Logo({ to = "/", className = "", variant = "light" }: Props) {
  const filter = variant === "dark" ? "brightness(0)" : "brightness(0) invert(1)";
  const img = (
    <img
      src="/logo.svg"
      alt="NuRock Entertainment"
      className="h-7 w-auto max-w-[140px] object-contain object-left sm:h-8 sm:max-w-[180px] md:max-w-[220px]"
      style={{ filter }}
    />
  );

  if (to) {
    return (
      <Link to={to} className={`inline-block ${className}`} aria-label="NuRock Home">
        {img}
      </Link>
    );
  }
  return <span className={`inline-block ${className}`}>{img}</span>;
}
