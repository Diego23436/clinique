'use client';

import { useState } from 'react';

type Props = {
  faq: { question: string; answer: string; category?: string };
};

export default function FAQItem({ faq }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-sky-100 bg-slate-50 px-4 py-3">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <div>
          <div className="font-medium text-slate-800">{faq.question}</div>
          {faq.category && <div className="text-sm text-slate-500">{faq.category}</div>}
        </div>
        <div className="ml-4 text-lg font-semibold text-sky-600">{open ? '−' : '+'}</div>
      </button>
      {open && <div className="mt-3 rounded-lg bg-white p-3 text-sm leading-6 text-slate-700">{faq.answer}</div>}
    </div>
  );
}
