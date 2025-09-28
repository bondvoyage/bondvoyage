import client from '../lib/contentful';
import Link from 'next/link';

export default async function CryptoPage() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'Crypto',
  });
  const crypto = res.items;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 p-8">
        <h1 className="text-4xl text-blue-900 mb-8 px-4">Crypto</h1>
        <ul>
          {crypto.map((item) => (
            <li key={item.sys.id}>
              <Link
                href={`/crypto/${item.fields.slug}`}
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
