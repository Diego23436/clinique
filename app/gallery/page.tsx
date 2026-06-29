import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-10">
        <Container className="space-y-12">
          {/* Hero */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h1 className="text-3xl font-semibold text-slate-900">Gallery</h1>
            <p className="mt-3 text-slate-600">Hero section placeholder.</p>
          </section>

          {/* Patient Testimonials */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Patient Testimonials</h2>
            <p className="mt-3 text-slate-600">Testimonials placeholder content.</p>
          </section>

          {/* Photo Gallery */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Photo Gallery</h2>
            <p className="mt-3 text-slate-600">Photo gallery placeholder content.</p>
          </section>

          {/* Video Gallery */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Video Gallery</h2>
            <p className="mt-3 text-slate-600">Video gallery placeholder content.</p>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
