import client from '../lib/contentful';
import Link from 'next/link';
export const dynamic = "force-dynamic";

export default async function CryptoPage() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    order: '-fields.date',
    'fields.category': 'Crypto'
  });
  const articles = res.items;

  const leftColumn = [];
  const middleColumn = [];
  const rightColumn = [];

  articles.forEach((article, index) => {
    if (index % 3 === 0) leftColumn.push(article);
    else if (index % 3 === 1) middleColumn.push(article);
    else rightColumn.push(article);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Crypto</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Left Column */}
        <div className="flex flex-col space-y-6 lg:col-span-1">
          {leftColumn.map((item) => {
            const { title, slug, summary, image } = item.fields;
            return (
              <Link key={item.sys.id} href={`/articles/${slug}`} className="group">
                {image?.fields?.file?.url && (
                  <img
                    src={`https:${image.fields.file.url}`}
                    alt={title}
                    className="w-full object-cover h-48"
                  />
                )}
                <h2 className="text-lg font-semibold text-blue-900 mt-2 group-hover:underline">
                  {title}
                </h2>
                <p className="text-blue-800 text-sm">{summary}</p>
              </Link>
            );
          })}
        </div>

        {/* Middle Column */}
        <div className="flex flex-col space-y-6 lg:col-span-2">
          {middleColumn.map((item, index) => {
            const { title, slug, summary, image } = item.fields;
            return (
              <Link key={item.sys.id} href={`/articles/${slug}`} className="group">
                {image?.fields?.file?.url && (
                  <img
                    src={`https:${image.fields.file.url}`}
                    alt={title}
                    className={`w-full object-cover ${index === 0 ? 'h-96' : 'h-64'}`}
                  />
                )}
                <h2 className={`mt-2 font-bold text-blue-900 ${index === 0 ? 'text-2xl' : 'text-xl'} group-hover:underline`}>
                  {title}
                </h2>
                {index === 0 && <p className="text-blue-800 text-sm">{summary}</p>}
              </Link>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-6 lg:col-span-1">
          {rightColumn.map((item) => {
            const { title, slug, summary, image } = item.fields;
            return (
              <Link key={item.sys.id} href={`/articles/${slug}`} className="group">
                {image?.fields?.file?.url && (
                  <img
                    src={`https:${image.fields.file.url}`}
                    alt={title}
                    className="w-full object-cover h-48"
                  />
                )}
                <h2 className="text-lg font-semibold text-blue-900 mt-2 group-hover:underline">
                  {title}
                </h2>
                <p className="text-blue-800 text-sm">{summary}</p>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
