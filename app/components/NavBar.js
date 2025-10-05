"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="Bond Voyage Logo" className="h-12" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center text-blue-900 font-medium">

          {/* Home */}
          <li>
            <Link href="/" className="hover:text-blue-700">Home</Link>
          </li>

          {/* Markets Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setMarketsOpen(true)}
            onMouseLeave={() => setMarketsOpen(false)}
          >
            <Link href="#" className="cursor-pointer hover:text-blue-700 font-medium">
              Markets ▾
            </Link>
            {marketsOpen && (
              <ul className="absolute left-0 top-full mt-0 shadow-lg rounded p-2 space-y-1 text-blue-900 font-medium w-48">
                <li>
                  <Link href="/stocks" className="hover:text-blue-700 block px-3 py-1 rounded">
                    Stocks
                  </Link>
                </li>
                <li>
                  <Link href="/etfs" className="hover:text-blue-700 block px-3 py-1 rounded">
                    ETFs
                  </Link>
                </li>
                <li>
                  <Link href="/crypto" className="hover:text-blue-700 block px-3 py-1 rounded">
                    Crypto
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Reports Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setReportsOpen(true)}
            onMouseLeave={() => setReportsOpen(false)}
          >
            <Link href="#" className="cursor-pointer hover:text-blue-700 font-medium">
              Reports ▾
            </Link>
            {reportsOpen && (
              <ul className="absolute left-0 top-full mt-0 shadow-lg rounded p-2 space-y-1 text-blue-900 font-medium w-48">
                <li>
                  <Link href="/shouldyoubuy" className="hover:text-blue-700 block px-3 py-1 rounded">
                    Should You Buy?
                  </Link>
                </li>
                <li>
                  <Link href="/stockcomparison" className="hover:text-blue-700 block px-3 py-1 rounded">
                    Stock Comparison
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* About */}
          <li>
            <Link href="/about" className="hover:text-blue-700">About</Link>
          </li>

          {/* Contact */}
          <li>
            <Link href="/contact" className="hover:text-blue-700">Contact Us</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}
