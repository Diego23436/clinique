type Props = {
  item: { name: string; service: string; message: string; avatar?: string; rating?: number };
};

export default function TestimonialCard({ item }: Props) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.avatar || '/images/logo.jpg'} alt={item.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-sky-200" />
        <div>
          <div className="font-semibold text-slate-900">{item.name}</div>
          <div className="text-sm text-slate-500">{item.service}</div>
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-700">{item.message}</p>
      {item.rating && (
        <div className="mt-3 text-amber-500">{'★'.repeat(item.rating) + '☆'.repeat(5 - item.rating)}</div>
      )}
    </div>
  );
}
