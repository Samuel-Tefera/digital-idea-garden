'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../_components/Button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    form: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
        form: '',
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fullName: '',
      email: '',
      password: '',
      form: '',
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    const email = formData.email;
    const password = formData.password;
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (data.error) {
        setErrors((prev) => ({
          ...prev,
          form: data.error.message || 'Signup failed',
        }));
        return;
      }
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result?.error) {
        setErrors((prev) => ({
          ...prev,
          form: result.error,
        }));
      } else {
        router.push('/ideagarden');
      }
    } catch (error) {
      console.log(error);

      setErrors((prev) => ({
        ...prev,
        form: 'An unexpected error occurred. Please try again.',
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    await signIn('google', { callbackUrl: '/ideagarden' });
  };

  return (
    <div className="m-auto mt-20 w-80 rounded-lg border border-neutral-700 p-8 text-primary-50 shadow-sm shadow-neutral-700 sm:w-[24rem]">
      <h1 className="mb-2 text-center text-2xl font-semibold">
        Create Account
      </h1>
      <p className="mb-4 text-center text-sm">
        Hey, Enter your details to create your account
      </p>
      {errors.form && (
        <div className="mb-4 rounded-md bg-red-900/50 p-3 text-sm text-red-100">
          {errors.form}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className={`w-full rounded-md border ${errors.fullName ? 'border-red-500' : 'border-neutral-600'} bg-neutral-800 p-2 text-neutral-100 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            className={`w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-neutral-600'} bg-neutral-800 p-2 text-neutral-100 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            className={`w-full rounded-md border ${errors.password ? 'border-red-500' : 'border-neutral-600'} bg-neutral-800 p-2 text-neutral-100 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-400">{errors.password}</p>
          )}
        </div>

        <Button type="submit" pending={isSubmitting} disabled={isSubmitting}>
          Create account
        </Button>
      </form>

      <p className="my-4 text-center text-sm before:mr-2 before:inline-block before:h-px before:w-16 before:bg-neutral-600 before:align-middle after:ml-2 after:inline-block after:h-px after:w-16 after:bg-neutral-600 after:align-middle">
        Or Sign up with
      </p>

      <form onSubmit={handleGoogleSignIn}>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-md border border-neutral-600 px-6 py-2 font-semibold text-primary-50 transition-colors hover:border-neutral-500 hover:bg-neutral-800/50 active:bg-neutral-800 disabled:opacity-50"
          disabled={isSubmitting}
        >
          <Image
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            height="18"
            width="18"
          />
          <span>Google</span>
        </button>
      </form>

      <div className="mt-4 text-center text-sm">
        <p>
          Already have an account?{' '}
          <Link
            className="text-primary-500 underline transition-colors hover:text-primary-400"
            href="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
