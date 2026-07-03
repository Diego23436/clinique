import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import FAQItem from '@/components/FAQItem';
import { faqs } from '@/lib/sampleData';

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-slate-50 py-10">
        <Container className="space-y-6">
          <section className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Common questions</p>
            <h1 className="mt-2 text-3xl font-semibold text-sky-900">Frequently asked questions</h1>
            <p className="mt-3 text-slate-600">Get quick answers about appointments, insurance, lab services, immunization, and more.</p>
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="space-y-3 rounded-3xl border border-sky-100 bg-white p-4 shadow-sm">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((f, i) => (
                <FAQItem key={i} faq={f} />
              ))}
            </div>
            <div className="space-y-3 rounded-3xl border border-sky-100 bg-white p-4 shadow-sm">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((f, i) => (
                <FAQItem key={i} faq={f} />
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
