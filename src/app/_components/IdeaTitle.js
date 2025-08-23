import { RiDeleteBin5Line } from 'react-icons/ri';
import { TiExportOutline } from 'react-icons/ti';
import { IoIosShareAlt } from 'react-icons/io';

async function IdeaTitle({ idea }) {
  return (
    <div className="mb-2 items-center justify-between rounded-xl px-6 text-primary-100 sm:flex">
      <div>
        <h2 className="text-lg font-bold sm:text-xl">{idea.title}</h2>
        <p className="text-sm opacity-90 sm:text-lg">{idea.description}</p>
      </div>
      <div className="mt-2 flex gap-2 sm:mt-0 sm:gap-3">
        <button
          className="flex items-center gap-1 rounded-lg bg-neutral-700 px-3 py-2 text-sm font-medium text-neutral-200 transition-all hover:bg-neutral-600 hover:text-primary-300 sm:px-4 sm:text-base"
          aria-label="Share"
        >
          <IoIosShareAlt className="text-sm sm:text-lg" />
        </button>
        <button
          className="flex items-center gap-1 rounded-lg bg-neutral-700 px-3 py-2 text-sm font-medium text-neutral-200 transition-all hover:bg-neutral-600 hover:text-primary-300 sm:px-4 sm:text-base"
          aria-label="Export"
        >
          <TiExportOutline className="text-sm sm:text-lg" />
        </button>
        <button
          className="flex items-center gap-1 rounded-lg bg-neutral-700 px-3 py-2 text-sm font-medium text-neutral-200 transition-all hover:bg-neutral-600 hover:text-accent-400 sm:px-4 sm:text-base"
          aria-label="Delete"
        >
          <RiDeleteBin5Line className="text-sm sm:text-lg" />
        </button>
      </div>
    </div>
  );
}

export default IdeaTitle;
