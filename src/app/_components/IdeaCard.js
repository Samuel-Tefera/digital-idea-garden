'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { getStageIcon } from '../_utils/helper';
import { HiDotsVertical } from 'react-icons/hi';
import IdeaCardMenu from './IdeaCardMenu';

function IdeaCard({ idea }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuButtonRef = useRef(null);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setMenuPosition({
        x: rect.right - 180,
        y: rect.bottom + 5,
      });
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

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
          <div className="relative">
            <button
              ref={menuButtonRef}
              onClick={handleMenuToggle}
              className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              <HiDotsVertical className="h-5 w-5" />
            </button>
          </div>
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

      <IdeaCardMenu
        idea={idea}
        ideaId={idea.id}
        isOpen={menuOpen}
        position={menuPosition}
      />
    </div>
  );
}

export default IdeaCard;
