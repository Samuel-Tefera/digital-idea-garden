'use server';

import { redirect } from 'next/navigation';
import { signInWithEmail, signInWithGoogle, signUpWithEmail } from './auth';

export async function signUpWithEmailAction(formData) {
  const fullName = formData.get('fullName');
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    await signUpWithEmail(email, password, fullName);
  } catch (e) {
    throw new Error('Creating new account failed');
  }
  redirect('/dashboard');
}

export async function signInWithGoogleAction() {
  let data;

  try {
    data = await signInWithGoogle();
  } catch {
    throw new Error('Sign in with google failed');
  }

  redirect(data.url);
}

export async function signInWithEmailAction(formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    await signInWithEmail(email, password);
  } catch {
    throw new Error('Login failed');
  }

  redirect('/dashboard');
}
