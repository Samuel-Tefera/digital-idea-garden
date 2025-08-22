'use client';

import { useState } from 'react';
import NewIdeaForm from './NewIdeaForm';

function NewIdea() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 rounded-lg bg-primary-600 px-4 py-2 font-medium text-primary-50 transition hover:bg-primary-700 hover:bg-opacity-90"
      >
        Plant new idea
      </button>
      <NewIdeaForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default NewIdea;
