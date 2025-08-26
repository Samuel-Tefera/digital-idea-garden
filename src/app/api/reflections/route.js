import { auth } from '@/app/_lib/auth';
import { supabase } from '@/app/_lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { ideaId, source, content } = await req.json();

    const { data, error } = await supabase
      .from('reflections')
      .insert([{ idea_id: ideaId, source, content }])
      .select();

    if (error) return NextResponse.json({ error }, { status: 400 });

    return NextResponse.json({ data }, { status: 201 });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
