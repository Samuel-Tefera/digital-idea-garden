import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { supabase } from '@/app/_lib/supabase';

export async function POST(req) {
  try {
    const { fullName, email, password } = await req.json();

    const password_hash = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from('users')
      .insert([{ name: fullName, email, password_hash }])
      .select();

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
