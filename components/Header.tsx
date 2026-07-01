import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 w-full px-0 sm:px-0 lg:px-0">
      <div className="mx-3 rounded-full border border-slate-200/80 bg-white/80 shadow-[0_12px_35px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:mx-4 lg:mx-6">
        <div className="flex w-full items-center justify-between px-2 py-3 sm:px-3 lg:px-4">
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                <Image
                  src="/images/logo.jpg"
                  alt="Clinique La Bienveillance logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="leading-none">
                <p className="text-lg font-semibold text-slate-900">Clinique La Bienveillance</p>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <Navigation className="text-slate-700" />
          </div>

          <div className="flex items-center justify-end gap-3">
            <Button href="/contact" variant="secondary" className="hidden sm:inline-flex">
              Contact us
            </Button>
            <div className="hidden items-center rounded-full border border-slate-200 bg-slate-50 p-1 sm:flex">
              <button className="rounded-full bg-[var(--PRIMARY)] px-3 py-1.5 text-sm font-semibold text-white">
                EN
              </button>
              <button className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600">
                FR
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
