import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  className = "",
  variant = "primary",
}: ButtonProps) {
  const baseClassName =
    variant === "primary"
      ? "rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
      : "rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100";

  if (href) {
    return (
      <Link href={href} className={`${baseClassName} ${className}`}>
        {children}
      </Link>
    );
  }

  return <button className={`${baseClassName} ${className}`}>{children}</button>;
}
