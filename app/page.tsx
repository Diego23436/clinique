import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-28 pb-10">
        <Container className="space-y-12">
          {/* Hero Section */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h1 className="text-3xl font-semibold text-slate-900">Welcome to MediCare Hospital</h1>
            <p className="mt-3 text-slate-600">Hero section placeholder.</p>
          </section>

          {/* Welcome Section */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Welcome</h2>
            <p className="mt-3 text-slate-600">Welcome section placeholder content.</p>
          </section>

          {/* Featured Services */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Featured Services</h2>
            <p className="mt-3 text-slate-600">Featured services placeholder content.</p>
          </section>

          {/* Featured Doctors */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Featured Doctors</h2>
            <p className="mt-3 text-slate-600">Featured doctors placeholder content.</p>
          </section>

          {/* Testimonials Preview */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Testimonials Preview</h2>
            <p className="mt-3 text-slate-600">Testimonials preview placeholder.</p>
          </section>

          {/* Gallery Preview */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Gallery Preview</h2>
            <p className="mt-3 text-slate-600">Gallery preview placeholder content.</p>
          </section>

          {/* Contact CTA */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Contact Us</h2>
            <p className="mt-3 text-slate-600">Contact CTA placeholder content.</p>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
