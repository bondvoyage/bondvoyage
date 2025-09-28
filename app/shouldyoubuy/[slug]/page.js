import client from '../../lib/contentful';

export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'Should You Buy?'
  });
  return res.items.map(item => ({
    slug: item.fields.slug
  }));
}

export default async function ShouldYouBuyPage({ params }) {
  const { slug } = await params;
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.slug': slug
  });
  const shouldyoubuy = res.items[0];
  if (!shouldyoubuy) return <p>Stock not found</p>;
  return (
    <div>
      <h1>{shouldyoubuy.fields.title}</h1>
      <p>{shouldyoubuy.fields.body?.content?.map(c => c.content?.[0]?.value).join('\n')}</p>
    </div>
  );
}
