import client from '../lib/contentful';

export default async function StocksPage() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'Stocks'
  });
  const stocks = res.items;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 p-8">
        <h1 className="text-4xl text-blue-900 mb-8 px-4">Stocks</h1>
        <ul>
          {stocks.map((stock) => (
            <li key={stock.sys.id}>
              <a href={`/stocks/${stock.fields.slug}`}> {stock.fields.title} </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
