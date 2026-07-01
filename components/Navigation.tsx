import Link from "next/link";

type NavigationProps = {
  className?: string;
};

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navigation({ className = "" }: NavigationProps) {
  return (
    <nav className={`flex items-center gap-7 text-[0.95rem] font-bold uppercase tracking-[0.08em] text-slate-700 ${className}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative pb-1 transition-colors duration-200 hover:text-[var(--PRIMARY)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:rounded-full after:bg-[var(--PRIMARY)] after:transition-transform after:duration-200 hover:after:scale-x-100"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
