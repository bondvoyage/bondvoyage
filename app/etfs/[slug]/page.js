import client from '../../lib/contentful';

export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'ETFs'
  });

  return res.items.map(item => ({
    slug: item.fields.slug
  }));
}

export default async function ETFsPage({ params }) {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.slug': params.slug
  });

  const etf = res.items[0];
  if (!etf) return <p>Stock not found</p>;

  return (
    <div>
      <h1>{etf.fields.title}</h1>
      <p>{etf.fields.body?.content?.map(c => c.content?.[0]?.value).join('\n')}</p>
    </div>
  );
}
