import { auth } from '../_lib/auth';
import NewIdea from './NewIdea';

async function Welcome({ ideas }) {
  const { user } = await auth();

  const userName = user?.name;

  return (
    <div className="mb-6 items-center justify-between rounded-xl px-6 py-2 text-primary-100 sm:flex">
      <div>
        <h2 className="mb-2 text-xl font-bold sm:text-2xl">
          {ideas.length === 0 ? 'Welcome ' : 'Welcome back'}, {userName}!
        </h2>
        <p className="text-sm opacity-90 sm:text-xl">
          {ideas.length > 0
            ? `Your ideas are growing well. You have ${ideas.length} ideas in your garden.`
            : `You have ${ideas.length} ideas in your garden. Start by adding one`}
        </p>
      </div>
      <NewIdea />
    </div>
  );
}

export default Welcome;
