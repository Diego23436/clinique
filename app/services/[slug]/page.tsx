import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await prisma.medicalService.findUnique({
    where: { slug: params.slug },
  });

  if (!service || !service.isActive) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-500 mb-6">{service.shortDescription}</p>
      <div className="prose">{service.fullDescription}</div>
    </main>
  );
}