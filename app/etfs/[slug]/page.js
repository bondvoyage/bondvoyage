import client from '../../lib/contentful';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
  const { slug } = params;
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.slug': slug
  });
  const shouldyoubuy = res.items[0];
  if (!etfs) return <p className="text-center mt-10">No Article</p>;

  const { author, title, body, image, summary, imagecredit } = etfs.fields;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      {/* Header Section */}
      <div className="mb-8 space-y-2 [&>*]:!m-0">
        <p className="text-sm font-semibold text-blue-700 tracking-widest uppercase mb-2"> ETFs </p>
        <h1 className="text-5xl font-bold text-blue-900 leading-tight mb-4"> {title} </h1>
        <p className="text-sm text-blue-800 max-w-2xl mb-4"> {summary} </p>
        <p className="text-sm text-blue-800 font-medium"> By {author} </p>
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
        {documentToReactComponents(body)}
      </div>
    </div>
  );
}
