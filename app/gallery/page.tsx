import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import GalleryGrid from "@/components/GalleryGrid";
import { gallery } from "@/lib/sampleData";

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-slate-50 py-10">
        <Container className="space-y-8">
          <section className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Gallery</p>
            <h1 className="mt-2 text-3xl font-semibold text-sky-900">Photos and videos from the clinic</h1>
            <p className="mt-3 text-slate-600">A window into our consultation rooms, laboratory services, health campaigns, and community engagement.</p>
          </section>

          <section>
            <GalleryGrid items={gallery} />
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
