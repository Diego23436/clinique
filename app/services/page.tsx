import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-10">
        <Container className="space-y-12">
          {/* Hero */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h1 className="text-3xl font-semibold text-slate-900">Our Services</h1>
            <p className="mt-3 text-slate-600">Hero section placeholder.</p>
          </section>

          {/* Services */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Services</h2>
            <p className="mt-3 text-slate-600">Services listing placeholder.</p>
          </section>

          {/* Treated Pathologies */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Treated Pathologies</h2>
            <p className="mt-3 text-slate-600">Pathologies placeholder content.</p>
          </section>

          {/* Health Campaigns */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Health Campaigns</h2>
            <p className="mt-3 text-slate-600">Health campaigns placeholder content.</p>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
