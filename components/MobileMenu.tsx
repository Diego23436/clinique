import Link from "next/link";

type MobileMenuProps = {
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

export default function MobileMenu({ className = "" }: MobileMenuProps) {
  return (
    <nav className={`flex flex-col gap-3 border-t border-slate-200 pt-4 ${className}`}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
