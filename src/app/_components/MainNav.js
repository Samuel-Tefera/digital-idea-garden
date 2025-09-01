'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaRegLightbulb } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

export default function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between border-b border-neutral-800 px-4 py-5 md:px-12">
      <div className="flex items-center gap-2 font-bold text-primary-400 md:text-xl">
        <FaRegLightbulb />
        <Link href="/" className="hover:text-primary-300">
          Digital Idea Garden
        </Link>
      </div>

      <div className="hidden items-center gap-6 font-semibold text-primary-100 md:flex">
        <Link href="/login" className="hover:text-primary-300">
          Log in
        </Link>
        <Link
          href="/signup"
          className="rounded-md bg-primary-600 px-4 py-2 text-white shadow-sm hover:bg-primary-500"
        >
          Sign up
        </Link>
      </div>

      <button
        className="text-2xl text-primary-100 hover:text-primary-300 md:hidden"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <FiMenu />
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-neutral-900/60 transition-opacity duration-300 ${
          mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-neutral-900 shadow-lg transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-5">
          <span className="flex items-center gap-2 font-bold text-primary-400">
            <FaRegLightbulb />
            Digital Idea Garden
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl text-primary-100"
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4 font-semibold text-primary-100">
          <Link
            href="/login"
            className="hover:text-primary-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-primary-600 px-4 py-2 text-center text-white shadow-sm hover:bg-primary-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
