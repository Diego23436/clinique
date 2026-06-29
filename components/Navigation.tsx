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
  { label: "Contact", href: "/contact" },
];

export default function Navigation({ className = "" }: NavigationProps) {
  return (
    <nav className={`flex items-center gap-4 text-sm font-medium text-slate-700 ${className}`}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="transition hover:text-sky-700">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
