import { RiDeleteBin5Line } from 'react-icons/ri';
import { TiExportOutline } from 'react-icons/ti';
import { IoIosShareAlt } from 'react-icons/io';

function IdeaTitle() {
  return (
    <div className="mb-6 items-center justify-between rounded-xl px-6 py-2 text-primary-100 sm:flex">
      <div>
        <h2 className="mb-2 text-xl font-bold sm:text-2xl">
          Sustainable urban gardening app
        </h2>
        <p className="text-sm opacity-90 sm:text-xl">
          An app that helps city dwellers grow food in small spaces
        </p>
      </div>
      <div className="mt-4 flex gap-2 sm:mt-0 sm:gap-3">
        <button
          className="flex items-center gap-1 rounded-lg bg-neutral-700 px-3 py-2 text-sm font-medium text-neutral-200 transition-all hover:bg-neutral-600 hover:text-primary-300 sm:px-4 sm:text-base"
          aria-label="Share"
        >
          <IoIosShareAlt className="text-lg sm:text-xl" />
          <span className="hidden sm:inline">Share</span>
        </button>
        <button
          className="flex items-center gap-1 rounded-lg bg-neutral-700 px-3 py-2 text-sm font-medium text-neutral-200 transition-all hover:bg-neutral-600 hover:text-primary-300 sm:px-4 sm:text-base"
          aria-label="Export"
        >
          <TiExportOutline className="text-lg sm:text-xl" />
          <span className="hidden sm:inline">Export</span>
        </button>
        <button
          className="flex items-center gap-1 rounded-lg bg-neutral-700 px-3 py-2 text-sm font-medium text-neutral-200 transition-all hover:bg-neutral-600 hover:text-accent-400 sm:px-4 sm:text-base"
          aria-label="Delete"
        >
          <RiDeleteBin5Line className="text-lg sm:text-xl" />
          <span className="hidden sm:inline">Delete</span>
        </button>
      </div>
    </div>
  );
}

export default IdeaTitle;
