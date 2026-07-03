import { prisma } from '@/lib/prisma';
import { Service } from '@prisma/client';
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
  ArrowRight,
  Phone,
  CalendarCheck,
  type LucideIcon,
} from 'lucide-react';
import styles from './services.module.css';

// Icon map for displaying service icons — Lucide is the sole icon
// system used across this page (no inline SVGs, no emoji, no
// other icon library).
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
  return <Icon className={styles.iconSvg} strokeWidth={1.5} aria-hidden="true" />;
}

// Centralize the clinic's booking phone number so it's a single source of
// truth for both the empty-state fallback and any future error state.
const CLINIC_PHONE = '+237 6XX XXX XXX'; // TODO: replace with real clinic number
const CLINIC_PHONE_TEL = 'tel:+2376XXXXXXXX'; // TODO: replace with real tel: link

export default async function ServicesPage() {
  let services: Service[] = [];
  let loadError = false;

  try {
    services = await prisma.service.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch (err) {
    console.error('Failed to load medical services:', err);
    loadError = true;
  }

  return (
    <div className={styles.page}>

      {/* ── HERO BANNER ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Centre médical
          </span>
          <h1 className={styles.heroTitle}>Nos Services</h1>
          <p className={styles.heroSubtitle}>
            Des soins de qualité dans plusieurs spécialités médicales, portés
            par une équipe attentive à chaque étape de votre parcours.
          </p>
          <Link href="/rendez-vous" className={styles.heroCta}>
            Prendre rendez-vous
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Spécialités
            </span>
            <h2 className={styles.sectionTitle}>Nos services médicaux</h2>
            <p className={styles.sectionSubtitle}>
              Nous offrons une gamme complète de services médicaux pour
              répondre à tous vos besoins de santé.
            </p>
          </div>

          {loadError ? (
            <div className={styles.empty}>
              <p>
                Nos services sont temporairement indisponibles. Contactez-nous
                directement pour toute information ou prise de rendez-vous.
              </p>
              <a href={CLINIC_PHONE_TEL} className={styles.emptyContact}>
                <Phone size={16} strokeWidth={2} aria-hidden="true" />
                {CLINIC_PHONE}
              </a>
            </div>
          ) : services.length === 0 ? (
            <div className={styles.empty}>
              <p>Aucun service disponible pour le moment.</p>
              <a href={CLINIC_PHONE_TEL} className={styles.emptyContact}>
                <Phone size={16} strokeWidth={2} aria-hidden="true" />
                Contactez-nous — {CLINIC_PHONE}
              </a>
            </div>
          ) : (
            <div className={styles.grid}>
              {services.map((service: Service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardIconWrap}>
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{service.name}</h3>
                    <p className={styles.cardDesc}>
                      {service.description || 'Service disponible'}
                    </p>
                    <span className={styles.cardLink}>
                      En savoir plus
                      <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaIcon}>
            <CalendarCheck size={26} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaTitle}>Besoin d&apos;un rendez-vous ?</h3>
            <p className={styles.ctaSubtitle}>
              Prenez rendez-vous en ligne ou contactez-nous pour toute
              information.
            </p>
          </div>
          <Link href="/rendez-vous" className={styles.ctaBtn}>
            Prendre rendez-vous maintenant
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ── */}
      <div className={styles.stickyMobileCta}>
        <Link href="/rendez-vous">
          <CalendarCheck size={18} strokeWidth={2} aria-hidden="true" />
          Prendre rendez-vous
        </Link>
      </div>

    </div>
  );
}
