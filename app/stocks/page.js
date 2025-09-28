import client from '../lib/contentful';
import Link from 'next/link';

export default async function StocksPage() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'Stocks',
  });
  const stocks = res.items;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 p-8">
        <h1 className="text-4xl text-blue-900 mb-8">Stocks</h1>
        <ul>
          {stocks.map((stock) => (
            <li key={stock.sys.id}>
              <Link
                href={`/stocks/${stock.fields.slug}`}
                className="text-blue-600 hover:underline"
              >
                {stock.fields.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
