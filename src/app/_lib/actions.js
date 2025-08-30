'use server';

import { revalidatePath } from 'next/cache';
import { supabase } from './supabase';

export async function deleteIdeaAction(ideaId) {
  const { error } = await supabase.from('ideas').delete().eq('id', ideaId);
  if (error) throw new Error('Idea can not be deleted');
  revalidatePath('/ideagarden');
}
