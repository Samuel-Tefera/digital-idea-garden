import Reflection from './Reflection';

function ReflectionBoard({ reflections }) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="mx-auto max-w-3xl space-y-4">
        {reflections.length === 0 ? (
          <div className="flex h-full items-center justify-center py-20 text-center italic text-neutral-500 dark:text-neutral-400">
            🌱 No reflections yet. Start adding your thoughts…
          </div>
        ) : (
          reflections.map((reflection) => (
            <Reflection key={reflection.id} reflection={reflection} />
          ))
        )}
      </div>
    </div>
  );
}

export default ReflectionBoard;
