import Link from "next/link";

type NavigationProps = {
  className?: string;
  onNavigate?: () => void;
};

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navigation({ className = "", onNavigate }: NavigationProps) {
  return (
    <nav className={`flex items-center gap-3 text-[0.8rem] font-bold uppercase tracking-[0.08em] text-slate-700 sm:gap-4 md:gap-5 lg:gap-6 lg:text-[0.95rem] ${className}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className="relative pb-1 transition-colors duration-200 hover:text-[var(--PRIMARY)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:rounded-full after:bg-[var(--PRIMARY)] after:transition-transform after:duration-200 hover:after:scale-x-100"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
