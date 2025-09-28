import client from '../lib/contentful';
import Link from 'next/link';

export default async function ETFsPage() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'ETFs',
  });
  const etfs = res.items;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 p-8">
        <h1 className="text-4xl text-blue-900 mb-8 px-4">ETFs</h1>
        <ul>
          {etfs.map((etf) => (
            <li key={etf.sys.id}>
              <Link
                href={`/etfs/${etf.fields.slug}`}
                className="text-blue-600 hover:underline"
              >
                {etf.fields.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
