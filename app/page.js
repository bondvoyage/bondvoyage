import client from './lib/contentful';
import Link from 'next/link';

export default async function HomePage() {
  const res = await client.getEntries({ content_type: 'bondvoyage', order: '-fields.date' });
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Left Column */}
        <div className="flex flex-col space-y-6 lg:col-span-1">
          {leftColumn.map((item) => (
            <Link key={item.sys.id} href={`/articles/${item.fields.slug}`} className="group">
              {item.fields.image?.fields?.file?.url && (
                <img
                  src={`https:${item.fields.image.fields.file.url}`}
                  alt={item.fields.title}
                  className="w-full object-cover"
                />
              )}
              <h2 className="text-lg font-semibold text-blue-900 mt-1 group-hover:underline">
                {item.fields.title}
              </h2>
              <h3 className="text-blue-800 text-sm">By {item.fields.author}</h3>
              <p className="text-blue-800 text-sm">{item.fields.summary}</p>
            </Link>
          ))}
        </div>

        {/* Middle Column */}
        <div className="flex flex-col space-y-6 lg:col-span-2">
          {middleColumn.map((item) => (
            <Link key={item.sys.id} href={`/articles/${item.fields.slug}`} className="group">
              {item.fields.image?.fields?.file?.url && (
                <img
                  src={`https:${item.fields.image.fields.file.url}`}
                  alt={item.fields.title}
                  className="w-full object-cover h-64"
                />
              )}
              <h2 className="text-xl font-bold text-blue-900 mt-2 group-hover:underline">
                {item.fields.title}
              </h2>
              <h3 className="text-blue-800 text-sm">By {item.fields.author}</h3>
              <p className="text-blue-800 text-sm">{item.fields.summary}</p>
            </Link>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-6 lg:col-span-1">
          {rightColumn.map((item) => (
            <Link key={item.sys.id} href={`/articles/${item.fields.slug}`} className="group">
              {item.fields.image?.fields?.file?.url && (
                <img
                  src={`https:${item.fields.image.fields.file.url}`}
                  alt={item.fields.title}
                  className="w-full object-cover"
                />
              )}
              <h2 className="text-lg font-semibold text-blue-900 mt-1 group-hover:underline">
                {item.fields.title}
              </h2>
              <h3 className="text-blue-800 text-sm">By {item.fields.author}</h3>
              <p className="text-blue-800 text-sm">{item.fields.summary}</p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
