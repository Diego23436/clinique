type Item = { id: string; type: string; title: string; file: string };

export default function GalleryGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div key={it.id} className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
          {it.type === 'IMAGE' ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={it.file} alt={it.title} className="h-48 w-full object-cover" />
          ) : (
            <div className="flex h-48 w-full items-center justify-center bg-sky-950 text-center text-white">Video: {it.title}</div>
          )}
          <div className="p-4">
            <div className="font-medium text-slate-800">{it.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
