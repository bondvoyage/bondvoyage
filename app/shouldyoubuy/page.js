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
            <li key={item.sys.id}>
              <Link
                href={`/shouldyoubuy/${item.fields.slug}`}
                className="text-blue-600 hover:underline"
              >
                {item.fields.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
