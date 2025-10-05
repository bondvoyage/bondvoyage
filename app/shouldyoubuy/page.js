import client from '../lib/contentful';
import Link from 'next/link';

export default async function ShouldYouBuyPage() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'Should You Buy?',
  });
  const articles = res.items;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 p-8">
        <h1 className="text-4xl text-blue-900 mb-8">Should You Buy?</h1>
        <ul>
          {articles.map((item) => (
            <li key={item.sys.id} className="mb-6">
              {item.fields.image?.fields?.file?.url && (
                <img
                  src={`https:${item.fields.image.fields.file.url}`}
                  alt={item.fields.title}
                  className="w-full max-w-sm mb-2"
                />
              )}
              <Link
                href={`/shouldyoubuy/${item.fields.slug}`}
                className="text-blue-900 font-semibold hover:underline"
              >
                {item.fields.title}
              </Link>
              <p className="text-blue-700 mt-1">
                {item.fields.summary}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
