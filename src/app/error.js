'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-24 flex min-h-screen justify-center bg-white px-4 dark:bg-neutral-900">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
          Oops, Something went wrong
        </h1>

        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          {error.message || 'An unexpected error occurred'}
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white transition-colors hover:bg-primary-500"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-md border border-neutral-300 px-4 py-2 text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-800"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
