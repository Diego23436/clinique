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
      : "btn-secondary-brand rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm transition-opacity duration-200";

  if (href) {
    return (
      <Link href={href} className={`${baseClassName} ${className}`}>
        {children}
      </Link>
    );
  }

  return <button className={`${baseClassName} ${className}`}>{children}</button>;
}
