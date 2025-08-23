import { supabase } from './supabase';

export async function getIdeas(userId) {
  const { data, error } = await supabase
    .from('ideas')
    .select('*')
    .eq('user_id', userId);

  if (error) throw new Error('Ideas can not be loaded');

  return data;
}

export async function getIdeaDetail(ideaId) {
  const { data: idea, ideaError } = await supabase
    .from('ideas')
    .select('*')
    .eq('id', ideaId)
    .single();

  if (ideaError) throw new Error('Idea can not be loaded');

  const { data: reflections, error } = await supabase
    .from('reflections')
    .select('*')
    .eq('idea_id', ideaId);

  if (error) throw new Error('Idea can not be loaded');

  return { idea, reflections };
}
