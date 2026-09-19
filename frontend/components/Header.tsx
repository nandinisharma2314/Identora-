"use client";

import { useState } from "react";
import { Send, Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 bg-[#FFF8F5] z-50 shadow-sm border-b border-pink-100">
      <div className="w-full px-4 md:px-8 lg:px-12 py-2 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-pink-500 flex items-center">
          <img
            src="/assest/img/logo.png"
            className="w-[90px] h-auto object-contain"
            alt="Logo"
          />
        </Link>

        <nav className="hidden lg:flex gap-10 text-gray-700">
          <Link href="/" className="hover:text-pink-500 transition">Home</Link>
          <Link href="/blog#about" className="hover:text-pink-500 transition">About</Link>
          <Link href="/#service" className="hover:text-pink-500 transition">Services</Link>
          <Link href="/#portfolio" className="hover:text-pink-500 transition">Portfolio</Link>
          <Link href="/#testi" className="hover:text-pink-500 transition">Testimonials</Link>
          <Link href="/blog" className="hover:text-pink-500 transition">Blog</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="hidden lg:flex bg-pink-200 hover:bg-pink-300 rounded-full px-6 py-2 items-center gap-2 transition text-sm font-medium"
          >
            <Send className="w-4 h-4" />
            <span>Let's Connect</span>
          </Link>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col bg-[#FFF8F5] px-6 py-4 space-y-4 lg:hidden border-t border-pink-100 absolute w-full shadow-lg">
          <p><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></p>
          <p><Link href="/blog#about" onClick={() => setMenuOpen(false)}>About</Link></p>
          <p><Link href="/#service" onClick={() => setMenuOpen(false)}>Services</Link></p>
          <p><Link href="/#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></p>
          <p><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></p>
        </div>
      )}
    </header>
  );
}
