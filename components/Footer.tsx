import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-sky-950 py-8 text-sky-50">
      <Container>
        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">Clinique La Bienveillance</p>
            <p className="mt-1 text-sky-200">Compassionate, modern healthcare in Cameroon.</p>
          </div>
          <div className="text-sky-200">
            <p>© 2026 Clinique La Bienveillance. All rights reserved.</p>
            <p className="mt-1">Call us for appointments, emergency support, and care guidance.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
