import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-blue-900 py-10 shadow">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Markets */}
        <div>
          <h3 className="text-lg mb-4">Markets</h3>
          <ul className="space-y-2">
            <li> <Link href="/stocks" className="hover:underline"> Stocks </Link> </li>
            <li> <Link href="/etfs" className="hover:underline"> ETFs </Link> </li>
            <li> <Link href="/crypto" className="hover:underline"> Crypto </Link> </li>
          </ul>
        </div>

        {/* Reports */}
        <div>
          <h3 className="text-lg mb-4">Reports</h3>
          <ul className="space-y-2">
            <li> <Link href="/shouldyoubuy" className="hover:underline">Should You Buy?</Link>
            </li>
            <li> <Link href="/stockcomparison" className="hover:underline">Stock Comparison</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:bondvoyage.us@gmail.com" className="hover:underline">Email</a>
            </li>
            <li>
              <a
                href="https://instagram.com/bondvoyageofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/bondvoyage/bondvoyage" className="hover:underline">
                Github
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-blue-800">
        © 2025 Bond Voyage
      </div>
    </footer>
  );
}
