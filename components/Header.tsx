import Link from "next/link";
import Container from "@/components/Container";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold text-slate-900">
          Clinique la bienveillance
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
