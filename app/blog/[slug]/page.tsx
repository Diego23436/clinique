import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import { articles } from '@/lib/sampleData';

type Props = { params: { slug: string } };

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-10">
          <Container>
            <h1 className="text-2xl font-semibold">Article not found</h1>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10">
        <Container>
          <article className="prose max-w-none">
            <h1>{article.title}</h1>
            {article.featuredImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={article.featuredImage} alt={article.title} className="rounded-lg" />
            )}
            <div>
              <p>{article.content}</p>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
