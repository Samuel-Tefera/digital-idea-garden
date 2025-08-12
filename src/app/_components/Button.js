'use client';

import { useFormStatus } from 'react-dom';
import SpinnerMini from './SpinnerMini';

export default function Button({ children, ...props }) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      className="w-full rounded-md bg-primary-600 py-2 font-semibold text-primary-50 transition-colors hover:bg-primary-700 disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
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
