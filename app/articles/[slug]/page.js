import client from '../../lib/contentful';
export const dynamic = "force-dynamic";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const res = await client.getEntries({
      content_type: 'bondvoyage',
      'fields.slug': slug,
    });

    const article = res.items[0];
    if (!article) return <p>Article not found.</p>;
    const { title, summary, date, author, imagecredit, image, body, category } = article.fields;

    return (
      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* Header Section */}
        <div className="mb-8 space-y-2 [&>*]:!m-0">
          <p className="text-sm font-semibold text-blue-700 tracking-widest uppercase mb-2">{category}</p>
          <h1 className="text-5xl font-bold text-blue-900 leading-tight mb-4">{title}</h1>
          <p className="text-sm text-blue-800 max-w-2xl mb-4">{summary}</p>
          <p className="text-sm text-blue-800 font-medium">{date}</p>
          <p className="text-sm text-blue-800 font-medium">By {author}</p>
        </div>

        {/* Image */}
        {image && image.fields?.file?.url && (
          <div className="mb-4">
            <img src={`https:${image.fields.file.url}`} alt={title} className="w-full" />
            {imagecredit && <p className="text-xs text-gray-500 mt-1 text-right">{imagecredit}</p>}
          </div>
        )}

        {/* Body */}
        <div className="prose prose-lg text-gray-800">
          {body && documentToReactComponents(body)}
        </div>
      </div>
  );
}
