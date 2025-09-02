import IdeasList from '@/app/_components/IdeasList';
import Welcome from '@/app/_components/Welcome';
import { auth } from '@/app/_lib/auth';
import { getIdeas } from '@/app/_lib/data-services';
import { redirect } from 'next/navigation';

export default async function Page() {
  const { user } = await auth();

  const ideas = await getIdeas(user.id);

  return (
    <div>
      <Welcome ideas={ideas} user={user} />
      <div>
        <IdeasList ideas={ideas} />
      </div>
    </div>
  );
}
