import Link from 'next/link';
import { deleteIdeaAction } from '../_lib/actions';

function IdeaCardMenu({ isOpen, position, ideaId }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed z-50 w-48 rounded-md bg-neutral-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5"
      style={{ top: position.y, left: position.x }}
    >
      <Link
        href={`/ideas/${ideaId}`}
        className="block w-full px-4 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700"
      >
        View Details
      </Link>
      <button
        onClick={async () => {
          await deleteIdeaAction(ideaId);
        }}
        className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-neutral-100 dark:text-red-500 dark:hover:bg-neutral-700"
      >
        Delete Idea
      </button>
    </div>
  );
}

export default IdeaCardMenu;
