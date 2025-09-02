'use client';

import { updateIdeaStageAction } from '../_lib/actions';

function IdeaTitle({ idea }) {
  const stages = [
    { value: 'Seed', label: 'Seed', color: 'bg-primary-600' },
    { value: 'Sprout', label: 'Sprout', color: 'bg-accent-500' },
    { value: 'Plant', label: 'Plant', color: 'bg-green-600' },
  ];

  return (
    <div className="mb-2 items-center justify-between rounded-xl px-6 text-primary-100 sm:flex">
      <div>
        <h2 className="text-lg font-bold sm:text-xl">{idea.title}</h2>
        <p className="text-sm opacity-90 sm:text-lg">{idea.description}</p>
      </div>
      <div className="mt-2 flex gap-2 sm:mt-0 sm:gap-3">
        {stages.map((stage) => (
          <button
            key={stage.value}
            onClick={async () => {
              await updateIdeaStageAction(idea.id, stage.value);
            }}
            disabled={idea.stage === stage.value}
            className={`rounded-lg px-3 py-1 text-sm font-medium transition-all sm:px-4 sm:py-2 sm:text-base ${
              idea.stage === stage.value
                ? `${stage.color} text-white shadow-md`
                : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
            }`}
          >
            {stage.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default IdeaTitle;
