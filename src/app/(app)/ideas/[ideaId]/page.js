import AddReflection from '@/app/_components/AddReflection';
import IdeaTitle from '@/app/_components/IdeaTitle';
import ReflectionBoard from '@/app/_components/ReflectionBoard';
import { getIdeaDetail } from '@/app/_lib/data-services';

async function Page({ params }) {
  const { ideaId } = await params;
  const data = await getIdeaDetail(ideaId);

  const { idea, reflections } = data;

  return (
    <div className="grid h-full">
      <IdeaTitle idea={idea} />
      <ReflectionBoard reflections={reflections} />
      <AddReflection ideaId={idea.id} />
    </div>
  );
}

export default Page;
