import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-28 pb-10">
        <Container className="space-y-12">
          {/* Hero */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h1 className="text-3xl font-semibold text-slate-900">Contact Us</h1>
            <p className="mt-3 text-slate-600">Hero section placeholder.</p>
          </section>

          {/* Contact Information */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Contact Information</h2>
            <p className="mt-3 text-slate-600">Contact details placeholder.</p>
          </section>

          {/* Appointment Form Placeholder */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Appointment Form</h2>
            <p className="mt-3 text-slate-600">Appointment form placeholder.</p>
          </section>

          {/* Google Maps Placeholder */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Google Maps</h2>
            <p className="mt-3 text-slate-600">Map placeholder content.</p>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
