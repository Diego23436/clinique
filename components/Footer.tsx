import Link from "next/link";
import Container from "@/components/Container";

const locations = [
  { name: "Location One", href: "https://maps.google.com/?q=Clinic+Location+One" },
  { name: "Location Two", href: "https://maps.google.com/?q=Clinic+Location+Two" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/15 bg-[var(--PRIMARY)] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
        <div className="footer-medical-ambient absolute left-[-5%] top-[-12%] h-48 w-48 rounded-full bg-[var(--SECONDARY)] blur-3xl" />
        <div className="footer-medical-ambient absolute bottom-[-8%] right-[-4%] h-56 w-56 rounded-full bg-[var(--TERTIARY)] blur-3xl" />
        <div className="footer-medical-float absolute left-[16%] top-[8%] h-20 w-20 rounded-full border border-white/35" />
        <div className="footer-medical-float absolute bottom-[18%] right-[24%] h-24 w-24 rounded-full border border-white/35" />
        <div className="footer-medical-float absolute left-[30%] top-[30%] h-24 w-24 rounded-full border border-white/25" />
        <div className="footer-heartbeat absolute left-[50%] top-[15%] h-[1px] w-[28%] bg-white/55" />
        <div className="footer-heartbeat absolute bottom-[24%] left-[10%] h-[1px] w-[22%] bg-white/45" />
        <div className="absolute left-[20%] top-[20%] h-3 w-3 rounded-full bg-white/70" />
        <div className="absolute bottom-[30%] right-[18%] h-3 w-3 rounded-full bg-white/70" />
      </div>

      <Container className="relative grid gap-10 py-12 lg:grid-cols-[1.15fr_0.8fr_0.75fr]">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--GENERAL)]">
            Trusted care
          </div>
          <p className="mb-3 text-2xl font-semibold text-white">Clinique La Bienveillance</p>
          <p className="max-w-md text-sm leading-7 text-slate-100/90">
            Providing compassionate, patient-centered care across multiple locations with a welcoming, professional experience.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--GENERAL)]">
            Our locations
          </h3>
          <ul className="space-y-2 text-sm">
            {locations.map((location) => (
              <li key={location.name}>
                <a
                  href={location.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-slate-100 transition duration-200 hover:text-[var(--SECONDARY)]"
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-[var(--SECONDARY)]" />
                  {location.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--GENERAL)]">
            Quick links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="transition hover:text-[var(--SECONDARY)]">About us</Link></li>
            <li><Link href="/services" className="transition hover:text-[var(--SECONDARY)]">Services</Link></li>
            <li><Link href="/gallery" className="transition hover:text-[var(--SECONDARY)]">Gallery</Link></li>
            <li><Link href="/contact" className="transition hover:text-[var(--SECONDARY)]">Contact</Link></li>
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-white/15 bg-[color:var(--PRIMARY)]/95">
        <Container className="flex flex-col gap-2 py-4 text-sm text-[var(--GENERAL)]/90 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Clinique La Bienveillance. All rights reserved.</p>
          <p>Compassionate care, professional support.</p>
        </Container>
      </div>
    </footer>
  );
}
