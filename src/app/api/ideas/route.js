import { auth } from '@/app/_lib/auth';
import { supabase } from '@/app/_lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data, error } = supabase
      .from('ideas')
      .select('*')
      .eq('user_id', session.user.id);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { title, description, stage, tags } = await req.json();

    const session = await auth();
    if (!session?.user)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { data, error } = await supabase
      .from('ideas')
      .insert([{ title, description, stage, tags, user_id: session.user.id }])
      .select();

    if (error) return NextResponse.json({ error }, { status: 400 });

    return NextResponse.json({ data }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
