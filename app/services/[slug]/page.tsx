import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Heart,
  Wind,
  Stethoscope,
  Baby,
  Microscope,
  Scissors,
  Smile,
  Brain,
  Plus,
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  MapPin,
  ScanLine,
  Zap,
  HeartPulse,
  type LucideIcon,
} from 'lucide-react';
import styles from './service-detail.module.css';

// Same icon system as the services list page — Lucide only,
// no inline SVGs, no emoji.
const SERVICE_ICONS: Record<string, LucideIcon> = {
  heart: Heart,
  lungs: Wind,
  stethoscope: Stethoscope,
  baby: Baby,
  microscope: Microscope,
  surgery: Scissors,
  tooth: Smile,
  brain: Brain,
  default: Plus,
};

function ServiceIcon({ icon }: { icon: string | null }) {
  const Icon = SERVICE_ICONS[icon ?? 'default'] ?? SERVICE_ICONS.default;
  return <Icon size={32} strokeWidth={1.5} aria-hidden="true" />;
}

// Fixed "why choose us" features — icon + copy live together so
// there's no risk of the array and its labels drifting apart.
const FEATURES: { Icon: LucideIcon; label: string; desc: string }[] = [
  {
    Icon: ScanLine,
    label: 'Équipements modernes',
    desc: 'Matériel de pointe pour des diagnostics précis',
  },
  {
    Icon: Stethoscope,
    label: 'Spécialistes qualifiés',
    desc: 'Médecins expérimentés dans leur domaine',
  },
  {
    Icon: Zap,
    label: 'Prise en charge rapide',
    desc: 'Rendez-vous disponibles sous 48h',
  },
  {
    Icon: HeartPulse,
    label: 'Suivi personnalisé',
    desc: 'Accompagnement à chaque étape du traitement',
  },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch service with related pathologies
  const service = await prisma.service.findUnique({
    where: { slug },
    include: {
      pathologies: {
        where: { isActive: true },
        include: {
          medias: {
            select: { id: true, type: true, filePath: true, title: true },
            orderBy: { displayOrder: 'asc' },
          },
        },
        orderBy: { createdAt: 'desc' },
      },
    },
  });

  if (!service) notFound();

  // Fetch other services for the sidebar
  const otherServices = await prisma.service.findMany({
    where: { NOT: { slug } },
    take: 4,
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <Link href="/services" className={styles.breadcrumb}>
            <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
            Retour aux services
          </Link>
          <div className={styles.heroIcon}>
            <ServiceIcon icon={service.icon} />
          </div>
          <h1 className={styles.heroTitle}>{service.name}</h1>
          <p className={styles.heroSubtitle}>{service.description || 'Service médical disponible'}</p>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className={styles.body}>
        <div className={styles.container}>

          {/* Main content */}
          <main className={styles.main}>
            <div className={styles.contentCard}>
              <div className={styles.contentLabel}>À propos de ce service</div>
              <div className={styles.contentText}>
                {service.longDescription || 'Veuillez contacter le centre pour plus d\'informations.'}
              </div>
            </div>

            {/* Display related pathologies */}
            {service.pathologies && service.pathologies.length > 0 && (
              <div className={styles.pathologiesSection}>
                <h2 className={styles.sectionTitle}>Pathologies traitées</h2>
                <div className={styles.pathologiesGrid}>
                  {service.pathologies.map(pathology => (
                    <Link
                      key={pathology.id}
                      href={`/pathologies/${pathology.slug}`}
                      className={styles.pathologyCard}
                    >
                      {pathology.medias.length > 0 && (
                        <img
                          src={pathology.medias[0].filePath}
                          alt={pathology.name}
                          className={styles.pathologyImage}
                        />
                      )}
                      <h3 className={styles.pathologyTitle}>{pathology.name}</h3>
                      {pathology.medias.length > 0 && (
                        <span className={styles.mediaCount}>
                          {pathology.medias.length} média{pathology.medias.length > 1 ? 's' : ''}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Why choose us */}
            <div className={styles.featuresGrid}>
              {FEATURES.map((f) => (
                <div key={f.label} className={styles.featureCard}>
                  <div className={styles.featureIconWrap}>
                    <f.Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h4 className={styles.featureLabel}>{f.label}</h4>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={styles.ctaCard}>
              <div className={styles.ctaLeft}>
                <h3 className={styles.ctaTitle}>Prendre rendez-vous</h3>
                <p className={styles.ctaDesc}>
                  Consultez nos spécialistes en {service.name.toLowerCase()} dès aujourd&apos;hui.
                </p>
              </div>
              <Link href="/rendez-vous" className={styles.ctaBtn}>
                Réserver maintenant
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Contact card */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>Nous contacter</h3>
              <ul className={styles.contactList}>
                <li>
                  <Phone size={16} strokeWidth={1.8} className={styles.contactIcon} aria-hidden="true" />
                  <span>+237 6XX XXX XXX</span>
                </li>
                <li>
                  <Mail size={16} strokeWidth={1.8} className={styles.contactIcon} aria-hidden="true" />
                  <span>contact@clinique.cm</span>
                </li>
                <li>
                  <Clock size={16} strokeWidth={1.8} className={styles.contactIcon} aria-hidden="true" />
                  <span>Lun–Sam : 8h–18h</span>
                </li>
                <li>
                  <MapPin size={16} strokeWidth={1.8} className={styles.contactIcon} aria-hidden="true" />
                  <span>Yaoundé, Cameroun</span>
                </li>
              </ul>
              <Link href="/contact" className={styles.sideBtn}>
                Envoyer un message
              </Link>
            </div>

            {/* Other services */}
            {otherServices.length > 0 && (
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>Autres services</h3>
                <ul className={styles.otherList}>
                  {otherServices.map((s) => (
                    <li key={s.id}>
                      <Link href={`/services/${s.slug}`} className={styles.otherLink}>
                        <span className={styles.otherDot} />
                        {s.title}
                        <ArrowRight size={14} strokeWidth={2} className={styles.otherArrow} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className={styles.sideBtnOutline}>
                  Voir tous les services
                </Link>
              </div>
            )}
          </aside>

        </div>
      </div>

    </div>
  );
}
