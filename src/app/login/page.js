import Image from 'next/image';
import Link from 'next/link';
import Button from '../_components/Button';
import { signInWithEmailAction, signInWithGoogleAction } from '../_lib/actions';

export const metadata = {
  title: 'Login',
};

export default function Page() {
  return (
    <div className="m-auto mt-20 w-80 rounded-xl border border-neutral-700 bg-neutral-900 p-8 text-primary-50 shadow-sm shadow-neutral-700 sm:w-[24rem]">
      <h1 className="mb-2 text-center text-2xl font-semibold">Login</h1>
      <p className="mb-4 text-center text-sm">
        Hey, Enter your details to get sign in to your account
      </p>
      <form action={signInWithEmailAction}>
        <div className="mb-4">
          <input
            className="w-full rounded-md border border-neutral-600 bg-neutral-800 p-2 text-neutral-100"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full rounded-md border border-neutral-600 bg-neutral-800 p-2 text-neutral-100"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <Button>Login</Button>
      </form>
      <p className="my-2 text-center text-sm">Or Sign in with</p>
      <form action={signInWithGoogleAction}>
        <button className="flex w-full items-center justify-center gap-2 rounded-md border border-neutral-600 px-6 py-2 font-semibold text-primary-50">
          <Image
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            height="18"
            width="18"
          />
          <span>Google</span>
        </button>
      </form>
      <div className="mt-2 text-center text-sm">
        <p>
          Don&apos;t have an account.{' '}
          <Link
            className="text-primary-600 underline hover:text-primary-700"
            href="/signup"
          >
            Request now
          </Link>
        </p>
      </div>
    </div>
  );
}
