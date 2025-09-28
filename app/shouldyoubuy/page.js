import client from '../lib/contentful';

export default async function ShouldYouBuyPage() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'Should You Buy?'
  });
  const shouldyoubuy = res.items;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 p-8">
        <h1 className="text-4xl text-blue-900 mb-8 px-4">Should You Buy?</h1>
        <ul>
          {shouldyoubuy.map((shouldyoubuy) => (
            <li key={shouldyoubuy.sys.id}>
              <a href={`/shouldyoubuy/${shouldyoubuy.fields.slug}`}> {shouldyoubuy.fields.title} </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
