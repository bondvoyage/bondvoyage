import client from '../lib/contentful';

export default async function ETFsPage() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'ETFs'
  });
  const etfs = res.items;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 p-8">
        <h1 className="text-4xl text-blue-900 mb-8 px-4">ETFs</h1>
        <ul>
          {etfs.map((etf) => (
            <li key={etf.sys.id}>
              <a href={`/etfs/${etf.fields.slug}`}>{etf.fields.title}</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
