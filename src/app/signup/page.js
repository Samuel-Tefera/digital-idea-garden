import Link from 'next/link';
import Button from '../_components/Button';
import Image from 'next/image';
import { signInWithEmailAction } from '../_lib/actions';

export const metadata = {
  title: 'Sign Up',
};

export default function Page() {
  return (
    <div className="m-auto mt-20 w-80 rounded-lg border p-8 px-8 text-primary-950 shadow-lg sm:w-[24rem]">
      <h1 className="mb-2 text-center text-2xl font-semibold">
        Create Account
      </h1>
      <p className="mb-4 text-center text-sm">
        Hey, Enter your details to create your account
      </p>
      <form action={signInWithEmailAction}>
        <div className="mb-4">
          <input
            className="w-full rounded-md border border-neutral-400 p-2"
            type="text"
            name="fullName"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full rounded-md border border-neutral-400 p-2"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full rounded-md border border-neutral-400 p-2"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
      <p className="my-2 text-center text-sm">Or Sign up with</p>
      <form>
        <button className="flex w-full items-center justify-center gap-2 rounded-md border border-primary-300 px-6 py-2 font-semibold text-primary-950">
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
          Already have an account?
          <Link
            className="text-primary-600 underline hover:text-primary-700"
            href="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
