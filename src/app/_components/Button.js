import SpinnerMini from './SpinnerMini';

export default function Button({ children, pending, ...props }) {
  return (
    <button
      {...props}
      className="w-full rounded-md bg-primary-600 py-2 font-semibold text-primary-50 transition-colors hover:bg-primary-700 disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? (
        <div className="flex items-center justify-center gap-2">
          <SpinnerMini /> {children}
        </div>
      ) : (
        children
      )}
    </button>
  );
}
