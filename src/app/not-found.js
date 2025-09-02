import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mt-24 flex min-h-screen justify-center bg-white px-4 dark:bg-neutral-900">
      <div className="w-full max-w-md text-center">
        <div className="mb-6"></div>

        <h1 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
          Not Found
        </h1>

        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          The resource you are looking for does not exist.
        </p>

        <Link
          href="/ideasgarden"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white transition-colors hover:bg-primary-500"
        >
          Back to your garden
        </Link>
      </div>
    </div>
  );
}
