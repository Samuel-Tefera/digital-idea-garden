'use server';

import { redirect } from 'next/navigation';
import { signUpWithEmail } from './auth';

export async function signInWithEmailAction(formData) {
  const fullName = formData.get('fullName');
  const email = formData.get('email');
  const password = formData.get('password');

  console.log(fullName);

  try {
    await signUpWithEmail(email, password, fullName);
  } catch (e) {
    console.log(e);

    throw new Error('Creating new account failed');
  }
  redirect('/dashboard');
}
