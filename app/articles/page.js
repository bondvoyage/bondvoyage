import client from '../lib/contentful';
import Link from 'next/link';
export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
  const res = await client.getEntries({ content_type: 'bondvoyage', order: '-fields.date' });
  const articles = res.items;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">All Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((item) => {
          const { title, slug, summary, image, author } = item.fields;
          return (
            <Link key={item.sys.id} href={`/articles/${slug}`} className="group">
              {image?.fields?.file?.url && (
                <img
                  src={`https:${image.fields.file.url}`}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
              )}
              <h2 className="text-xl font-semibold text-blue-900 mt-2 group-hover:underline">{title}</h2>
              <p className="text-blue-800 text-sm">By {author}</p>
              <p className="text-blue-800 text-sm">{summary}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
