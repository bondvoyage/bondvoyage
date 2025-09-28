import client from '../../lib/contentful';

export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'Stocks'
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

  const stock = res.items[0];
  if (!stock) return <p>Stock not found</p>;

  return (
    <div>
      <h1>{stock.fields.title}</h1>
      <p>{stock.fields.body?.content?.map(c => c.content?.[0]?.value).join('\n')}</p>
    </div>
  );
}
