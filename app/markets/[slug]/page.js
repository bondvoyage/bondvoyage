import { client } from "../lib/contentful";

export default async function Market({ params }) {
  const { slug } = params;
  const entries = await client.getEntries({
    content_type: "article",
    "fields.category": slug,
  });

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{slug.toUpperCase()}</h1>
      {entries.items.map((article) => (
        <div key={article.sys.id}>{article.fields.title}</div>
      ))}
    </div>
  );
}
