import Link from 'next/link';
import { getStageIcon } from '../_utils/helper';

function IdeaCard({ idea }) {
  return (
    <div
      key={idea.id}
      className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800"
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <span
            className={`rounded-full px-2 py-1 text-xs font-semibold text-primary-50 ${idea.stage}`}
          >
            {getStageIcon(idea.stage)}{' '}
            {idea.stage.charAt(0).toUpperCase() + idea.stage.slice(1)}
          </span>
          <button className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white">
          {idea.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">
          {idea.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {idea.tags &&
            idea.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300"
              >
                #{tag}
              </span>
            ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-neutral-200 bg-neutral-50 px-5 py-3 dark:border-neutral-600 dark:bg-neutral-700">
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          Last updated: {new Date(idea.updated_at).toLocaleDateString()}
        </span>
        <Link
          href={`ideas/${idea.id}`}
          className="text-sm font-medium text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
        >
          Cultivate →
        </Link>
      </div>
    </div>
  );
}

export default IdeaCard;
