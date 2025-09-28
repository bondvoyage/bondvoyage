import client from '../lib/contentful';

export default async function CryptoPage() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'Crypto'
  });
  const cryptos = res.items;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 p-8">
        <h1 className="text-4xl text-blue-900 mb-8 px-4">Crypto</h1>
        <ul>
          {cryptos.map((crypto) => (
            <li key={crypto.sys.id}>
              <a href={`/crypto/${crypto.fields.slug}`}>{crypto.fields.title}</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
