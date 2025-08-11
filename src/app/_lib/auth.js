import { supabase } from './supabase';

// Email/password signup
export async function signUpWithEmail(email, password, fullName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { display_name: fullName },
    },
  });
  if (error) throw error;
  return data;
}

// Email/password login
export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

// Google OAuth login
export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: process.env.PUBLIC_REDIRECT_URL,
    },
  });
  if (error) throw error;
  return data;
}
