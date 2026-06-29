import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-10">
        <Container className="space-y-12">
          {/* Hero */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h1 className="text-3xl font-semibold text-slate-900">Resources</h1>
            <p className="mt-3 text-slate-600">Hero section placeholder.</p>
          </section>

          {/* Blog / Health Articles */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Blog / Health Articles</h2>
            <p className="mt-3 text-slate-600">Articles placeholder content.</p>
          </section>

          {/* FAQ */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
            <p className="mt-3 text-slate-600">Frequently asked questions placeholder.</p>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
