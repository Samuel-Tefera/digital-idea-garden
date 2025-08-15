import Image from 'next/image';

function Reflection({ reflection }) {
  return (
    <div key={reflection.id} className="flex justify-start">
      <div
        className={`w-full rounded-md border-l-4 px-4 py-2 ${
          reflection.source === 'AI'
            ? 'border-primary-500 bg-primary-50 dark:bg-primary-950'
            : 'border-neutral-400 bg-white dark:bg-neutral-800'
        }`}
      >
        <p className="text-neutral-800 dark:text-neutral-200">
          {reflection.content}
        </p>
        {reflection?.image && (
          <div className="mt-2">
            <Image
              src={reflection.image}
              alt="Reflection"
              className="max-h-60 rounded-md border border-neutral-200 dark:border-neutral-700"
            />
          </div>
        )}
        <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
          {new Date(reflection.created_at).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  );
}

export default Reflection;
