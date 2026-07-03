import Link from 'next/link';

type Props = {
  article: any;
};

export default function ArticleCard({ article }: Props) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
      {article.featuredImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={article.featuredImage} alt={article.title} className="h-48 w-full object-cover" />
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-sky-900">{article.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{article.excerpt}</p>
        <div className="mt-4 pt-3">
          <Link href={`/blog/${article.slug}`} className="inline-flex rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700">
            Read article
          </Link>
        </div>
      </div>
    </article>
  );
}
