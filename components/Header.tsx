"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 w-full px-0">
      <div className="relative mx-[5px] rounded-full border border-slate-200/80 bg-white/80 shadow-[0_12px_35px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:mx-[4px] lg:mx-2">
        <div className="flex w-full items-center gap-2 px-2 py-3 sm:px-3 lg:px-4">
          <div className="flex min-w-0 flex-1 items-center justify-start">
            <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-200 sm:h-11 sm:w-11">
                <Image
                  src="/images/logo.jpg"
                  alt="Clinique La Bienveillance logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="hidden min-w-0 leading-none sm:block">
                <p className="truncate text-sm font-semibold text-slate-900 sm:text-base lg:text-lg">
                  Clinique La Bienveillance
                </p>
              </div>
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            <Navigation className="text-slate-700" />
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
            <Button href="/contact" variant="secondary" className="hidden sm:inline-flex">
              Contact us
            </Button>
            <div className="hidden items-center rounded-full border border-slate-200 bg-slate-50 p-1 sm:flex">
              <button className="rounded-full bg-[var(--PRIMARY)] px-2.5 py-1 text-xs font-semibold text-white sm:px-3 sm:py-1.5 sm:text-sm">
                EN
              </button>
              <button className="rounded-full px-2.5 py-1 text-xs font-semibold text-slate-600 sm:px-3 sm:py-1.5 sm:text-sm">
                FR
              </button>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span className={`h-0.5 w-5 rounded-full bg-slate-700 transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-5 rounded-full bg-slate-700 transition ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-5 rounded-full bg-slate-700 transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full z-[60] mt-2 rounded-2xl border border-slate-200/80 bg-white/95 px-3 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.14)] backdrop-blur-xl lg:hidden">
            <Navigation
              className="flex-col items-start gap-3 text-slate-700"
              onNavigate={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </header>
  );
}
