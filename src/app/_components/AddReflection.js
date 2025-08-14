'use client';

import { useEffect, useRef, useState } from 'react';
import { FiPaperclip } from 'react-icons/fi';
import { FaArrowUp } from 'react-icons/fa';

export default function AddReflectction({
  onSend = (text) => console.log('send:', text),
  onSuggest = () => console.log('get AI suggestion'),
  placeholder = 'Add your reflection...',
}) {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = 'auto';
    const lineHeight = parseInt(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * 6;

    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
  }, [value]);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-2 sm:px-4">
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
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder={placeholder}
            className="flex-1 resize-none bg-transparent px-2 py-2 text-sm leading-normal text-neutral-100 outline-none placeholder:text-neutral-500 md:text-base"
            style={{ maxHeight: '150px' }}
          />

          <div className="absolute bottom-2 right-2 z-10 flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onSuggest}
              className="h-8 items-center rounded-lg border border-neutral-700 px-1 text-sm text-neutral-200 transition hover:bg-neutral-700/50 sm:h-10 sm:px-3"
            >
              Get AI suggestion
            </button>
            <button
              type="submit"
              aria-label="Send"
              disabled={!value.trim()}
              className={`grid h-8 w-10 place-items-center rounded-full transition sm:h-10 ${
                value.trim()
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'cursor-not-allowed bg-neutral-700'
              }`}
            >
              <FaArrowUp size={16} className="text-white" />
            </button>
          </div>
        </div>
        <div className="h-9"></div>
      </form>
    </div>
  );
}
