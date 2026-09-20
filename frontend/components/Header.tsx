"use client";

import { useState } from "react";
import { Send, Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 bg-[#FFF8F5] z-50 shadow-sm border-b border-pink-100">
      <div className="w-full px-4 md:px-8 lg:px-12 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-pink-500 flex items-center">
          <img
            src="/assest/img/logo.png"
            className="w-[70px] md:w-[90px] h-auto object-contain"
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
            className="lg:hidden p-2 -mr-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#FFF8F5] border-t border-pink-100 shadow-lg transition-all duration-300 ease-in-out origin-top ${
          menuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col py-4 px-6 space-y-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-medium py-2 border-b border-pink-50">Home</Link>
          <Link href="/blog#about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-medium py-2 border-b border-pink-50">About</Link>
          <Link href="/#service" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-medium py-2 border-b border-pink-50">Services</Link>
          <Link href="/#portfolio" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-medium py-2 border-b border-pink-50">Portfolio</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-medium py-2 border-b border-pink-50">Blog</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} className="inline-flex justify-center bg-pink-200 hover:bg-pink-300 text-pink-900 rounded-full px-6 py-3 items-center gap-2 transition text-sm font-medium mt-4">
            <Send className="w-4 h-4" />
            <span>Let's Connect</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
