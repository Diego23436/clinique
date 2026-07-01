import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { MedicalService } from '@prisma/client';

export default async function ServicesPage() {
  const services = await prisma.medicalService.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Nos Services</h1>

      {services.length === 0 ? (
        <p className="text-center text-gray-500">Aucun service disponible pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: MedicalService) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.shortDescription}</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}