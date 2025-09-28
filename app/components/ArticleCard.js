export default function ArticleCard({ article }) {
  const imageUrl = article.fields.image?.fields.file.url || "/placeholder.png";
  const title = article.fields.title || "Untitled";
  const summary = article.fields.summary || "No summary available.";

  return (
    <div className="border p-4 shadow hover:shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{summary}</p>
    </div>
  );
}
