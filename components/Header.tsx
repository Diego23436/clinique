import Link from "next/link";
import Container from "@/components/Container";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";

export default function Header() {
  return (
    <header className="border-b border-sky-100 bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="Clinic logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-sky-200" />
          <div>
            <div className="text-lg font-semibold text-sky-900">Clinique La Bienveillance</div>
            <div className="text-sm text-emerald-700">Compassionate care, trusted expertise</div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Navigation />
        </div>

        <div className="md:hidden">
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </Container>
    </header>
  );
}
