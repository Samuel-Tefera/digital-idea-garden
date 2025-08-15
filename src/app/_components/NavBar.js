'use client';

import { useState } from 'react';
import Link from 'next/link';
import SignOutButton from './SignOutButton';
import { FaRegLightbulb } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between border-b border-neutral-800 px-4 py-5 md:px-12">
      <div className="flex items-center gap-2 font-bold text-primary-400 md:text-xl">
        <FaRegLightbulb />
        <h1>Digital Idea Garden</h1>
      </div>

      <ul className="hidden items-center gap-4 font-semibold text-primary-100 md:flex">
        <li className="hover:text-primary-300">
          <Link href="/ideagarden">My Ideas</Link>
        </li>
        <li className="hover:text-primary-300">
          <Link href="#">Show Case</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>

      <button
        className="text-2xl text-primary-100 hover:text-primary-300 md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <FiMenu />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-neutral-900/60 transition-opacity duration-300 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-neutral-900 shadow-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-5">
          <span className="flex items-center gap-2 font-bold text-primary-400">
            <FaRegLightbulb />
            Digital Idea Garden
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-primary-100"
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4 font-semibold text-primary-100">
          <li
            className="hover:text-primary-300"
            onClick={() => setIsOpen(false)}
          >
            <Link href="/ideagarden">My Ideas</Link>
          </li>
          <li
            className="hover:text-primary-300"
            onClick={() => setIsOpen(false)}
          >
            <Link href="#">Show Case</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <SignOutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
