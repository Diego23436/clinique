import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Link from "next/link";

const highlights = [
  { title: "Primary Care", text: "General consultations, chronic disease follow-up, and preventive checkups." },
  { title: "Maternal Health", text: "Antenatal care, safe delivery planning, and newborn support." },
  { title: "Community Outreach", text: "Vaccination drives, malaria prevention, and health education." },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-28 pb-10">
        <Container className="space-y-12">
          <section className="overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-700 via-sky-600 to-emerald-600 p-8 text-white shadow-lg">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-100">Trusted healthcare for families</p>
              <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Modern care, compassionate service, and reliable guidance.</h1>
              <p className="mt-4 text-lg text-sky-50/90">
                We provide prevention, diagnosis, treatment, and health education with a strong focus on maternal care, infectious disease support, and community wellbeing.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/blog" className="rounded-full bg-white px-5 py-3 font-medium text-sky-700">Read health articles</Link>
                <Link href="/contact" className="rounded-full border border-white/70 px-5 py-3 font-medium text-white">Book an appointment</Link>
              </div>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-sky-900">{item.title}</h2>
                <p className="mt-2 text-slate-600">{item.text}</p>
              </div>
            ))}
          </section>

          <section className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">What we offer</p>
                <h2 className="mt-2 text-3xl font-semibold text-sky-900">Public information pages built for your clinic</h2>
                <p className="mt-3 text-slate-600">
                  Browse our blog for trusted health guidance, explore the FAQ for common questions, read patient testimonials, and view our gallery of clinic activities and community care.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/faq" className="rounded-full bg-sky-600 px-5 py-3 font-medium text-white">View FAQ</Link>
                <Link href="/testimonials" className="rounded-full bg-emerald-600 px-5 py-3 font-medium text-white">See testimonials</Link>
              </div>
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
