import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MediCare Hospital. All rights reserved.</p>
          <p>Compassionate care, advanced medicine.</p>
        </div>
      </Container>
    </footer>
  );
}
