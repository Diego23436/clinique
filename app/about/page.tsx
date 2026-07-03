import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-28 pb-10">
        <Container className="space-y-12">
          {/* Hero */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h1 className="text-3xl font-semibold text-slate-900">About Our Hospital</h1>
            <p className="mt-3 text-slate-600">Hero section placeholder.</p>
          </section>

          {/* About Us */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">About Us</h2>
            <p className="mt-3 text-slate-600">About us content placeholder.</p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">Our first location</h3>
              <p className="mt-2 text-sm text-slate-600">Douala, Bepanda</p>
              <a
                href="https://maps.app.goo.gl/TbphKxsL9v4CAiPk9"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--PRIMARY)] transition hover:text-[var(--SECONDARY)]"
              >
                Open on Google Maps
                <span className="ml-2">↗</span>
              </a>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Mission & Vision</h2>
            <p className="mt-3 text-slate-600">Mission and vision placeholder.</p>
          </section>

          {/* Our Team */}
          <section className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Our Team</h2>
            <p className="mt-3 text-slate-600">Our team placeholder content.</p>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
