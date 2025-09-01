import Link from 'next/link';
import MainNav from './_components/MainNav';

export default function Page() {
  return (
    <div className="min-h-screen">
      <MainNav />

      <div className="flex h-[calc(100vh-80px)] items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
            Cultivate Your{' '}
            <span className="text-primary-600 dark:text-primary-400">
              Creative Ideas
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 md:text-xl md:leading-9 dark:text-neutral-400">
            Digital Idea Garden helps you capture, nurture, and grow your ideas
            from tiny seeds to fully bloomed projects. With smart organization
            and AI-powered suggestions, no idea gets left behind.
          </p>
          <div className="mt-8 sm:mt-10">
            <Link
              href="/signup"
              className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:text-lg dark:bg-primary-500 dark:hover:bg-primary-400"
            >
              Start Growing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
