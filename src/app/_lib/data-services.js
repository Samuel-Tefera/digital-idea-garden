import { supabase } from './supabase';

export async function getIdeas(userId) {
  const { data, error } = await supabase
    .from('ideas')
    .select('*')
    .eq('user_id', userId);

  if (error) throw new Error('Ideas can not be loaded');

  return data;
}
