import client from '../../lib/contentful';

export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'Crypto'
  });

  return res.items.map(item => ({
    slug: item.fields.slug
  }));
}

export default async function StockPage({ params }) {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.slug': params.slug
  });

  const crypto = res.items[0];
  if (!crypto) return <p>Stock not found</p>;

  return (
    <div>
      <h1>{crypto.fields.title}</h1>
      <p>{crypto.fields.body?.content?.map(c => c.content?.[0]?.value).join('\n')}</p>
    </div>
  );
}
