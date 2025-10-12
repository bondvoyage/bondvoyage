"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const pages = [
    { path: "/", label: "Home" },
    {
      label: "Markets",
      dropdown: [
        { path: "/stocks", label: "Stocks" },
        { path: "/etfs", label: "ETFs" },
        { path: "/crypto", label: "Crypto" },
      ],
    },
    {
      label: "Reports",
      dropdown: [
        { path: "/shouldyoubuy", label: "Should You Buy?" },
        { path: "/stockcomparison", label: "Stock Comparison" },
      ],
    },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex space-x-6 items-center text-blue-900 font-medium">
          {pages.map((page) => (
            <li
              key={page.label}
              className="relative group"
            >
              {page.dropdown ? (
                <span className="cursor-pointer hover:text-blue-700 font-medium">
                  {page.label} ▾
                </span>
              ) : (
                <Link href={page.path} className="hover:text-blue-700">
                  {page.label}
                </Link>
              )}

              {/* Dropdown menu */}
              {page.dropdown && (
                <ul className="absolute left-0 top-full mt-0 shadow-lg rounded p-2 space-y-1 text-blue-900 font-medium w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all bg-white">
                  {page.dropdown.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className="hover:text-blue-700 block px-3 py-1 rounded"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

      {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-blue-900 hover:text-blue-700"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {pages.map((page) => (
              <li key={page.label}>
                {page.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileDropdownOpen(mobileDropdownOpen === page.label ? null : page.label)}
                      className="w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50"
                    >
                      {page.label} ▾
                    </button>
                    {mobileDropdownOpen === page.label && (
                      <ul className="pl-4 mt-1 space-y-1">
                        {page.dropdown.map((item) => (
                          <li key={item.path}>
                            <Link
                              href={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-3 py-1 rounded-md text-sm text-blue-900 hover:bg-blue-100"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={page.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-blue-900 hover:bg-blue-50"
                  >
                    {page.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
