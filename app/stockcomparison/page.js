import client from '../lib/contentful';
import Link from 'next/link';

export default async function StockComparisonPage() {
  const res = await client.getEntries({
    content_type: 'bondvoyage',
    'fields.category': 'Stock Comparison',
  });

  const articles = res.items;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mb-30">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-5xl font-bold text-blue-900 mb-1">Stock Comparison</h1>
        <p className="text-blue-800">
          A side-by-side comparison of two stocks, evaluating performance, risks, and growth potential to determine which may be the better investment.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((item) => {
          const { title, author, summary, slug, image } = item.fields;

          return (
            <Link
              key={item.sys.id}
              href={`/stockcomparison/${slug}`}
              className="block hover:bg-gray-50 transition-colors duration-200"
            >
              {/* Image */}
              {image?.fields?.file?.url && (
                <img
                  src={`https:${image.fields.file.url}`}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              )}

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-blue-900 mb-1 hover:underline">{title}</h2>
                <p className="text-sm text-gray-600 mb-2">By {author}</p>
                <p className="text-blue-800 text-sm">{summary}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
