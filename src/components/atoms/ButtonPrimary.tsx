import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export function ButtonPrimary({ children, className = "", ...props }: Props) {
  return (
    <button
      type="button"
      className={
        "premium-button inline-flex items-center justify-center gap-2 px-7 py-3 text-[0.72rem] font-extrabold uppercase tracking-[0.28em] transition-all duration-300 primary-glow " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
