import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/lib/sampleData';

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-slate-50 py-10">
        <Container className="space-y-6">
          <section className="rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-700 to-emerald-600 p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-100">Patient voices</p>
            <h1 className="mt-2 text-3xl font-semibold">Patient testimonials</h1>
            <p className="mt-3 max-w-2xl text-sky-50/90">These comments reflect the trust and care our patients experience at the clinic.</p>
          </section>

          <section>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} item={t} />
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
