'use client';

import { useEffect, useRef, useState } from 'react';
import { FiPaperclip } from 'react-icons/fi';
import { FaArrowUp } from 'react-icons/fa';
import SpinnerMini from './SpinnerMini';
import { useRouter } from 'next/navigation';

export default function AddReflectction({ idea, reflections }) {
  const [value, setValue] = useState('');
  const [isSubmiting, setIsSumiting] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const textareaRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = 'auto';
    const lineHeight = parseInt(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * 6;

    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
  }, [value]);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSumiting(true);
    const trimmed = value.trim();
    if (!trimmed) return;

    const res = await fetch('/api/reflections', {
      method: 'POST',
      body: JSON.stringify({
        content: trimmed,
        ideaId: idea.id,
        source: 'user',
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    setValue('');
    if (res.ok) router.refresh();
    setIsSumiting(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  async function handleAISuggestion() {
    const prompt = `We are inside a Digital Idea Garden where thoughts grow like seeds.
                I will give you an IDEA and some REFLECTIONS.
                Your role is to respond in under 100 words, focusing only on useful features or directions that could be added to the idea.
                Avoid repeating what I already gave you.
                Do not use lists, bullets, or headings—just write in one natural paragraph, like we are casually brainstorming together.


                IDEA: ${idea.title}
                'REFLECTIONS: ${reflections?.toString()}
`;

    setIsSuggesting(true);
    const res = await fetch('/api/agent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    if (res.ok) {
      const data = await res.json();
      const agentRes = await fetch('/api/reflections', {
        method: 'POST',
        body: JSON.stringify({
          content: data.output,
          ideaId: idea.id,
          source: 'ai',
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (agentRes.ok) router.refresh();
    }

    setIsSuggesting(false);
  }

  const handleUserInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="mx-auto mb-1 w-full max-w-4xl px-2 sm:px-4">
      <form
        onSubmit={handleSubmit}
        className="relative rounded-xl border border-neutral-700 bg-neutral-800 shadow-lg"
      >
        <div className="flex items-end gap-2 p-2 md:p-3">
          <div className="absolute bottom-2 left-2">
            <button
              type="button"
              aria-label="Attach"
              className="z-10 grid h-8 w-10 shrink-0 place-items-center rounded-lg border border-neutral-700 transition hover:bg-neutral-700/50 sm:h-10"
            >
              <FiPaperclip className="text-neutral-300" size={18} />
            </button>
          </div>

          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleUserInput}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Add your reflection..."
            className="flex-1 resize-none bg-transparent px-2 py-2 text-sm leading-normal text-neutral-100 outline-none placeholder:text-neutral-500 md:text-base"
            style={{ maxHeight: '150px' }}
          />

          <div className="absolute bottom-2 right-2 z-10 flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={handleAISuggestion}
              className="h-8 items-center rounded-lg border border-neutral-700 px-1 text-sm text-neutral-200 transition hover:bg-neutral-700/50 sm:h-10 sm:px-3"
            >
              {isSuggesting ? <SpinnerMini /> : 'Get AI suggestion'}
            </button>
            <button
              type="submit"
              aria-label="Send"
              disabled={!value.trim() || isSubmiting}
              className={`grid h-8 w-10 place-items-center rounded-full transition sm:h-10 ${
                value.trim() && !isSubmiting
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'cursor-not-allowed bg-neutral-700'
              }`}
            >
              {isSubmiting ? (
                <SpinnerMini />
              ) : (
                <FaArrowUp size={16} className="text-white" />
              )}
            </button>
          </div>
        </div>
        <div className="h-9"></div>
      </form>
    </div>
  );
}
