'use client';

import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800 bg-opacity-90"
      onClick={handleOverlayClick}
    >
      <div className="w-4/5 overflow-hidden rounded-xl bg-neutral-900 shadow-2xl sm:w-1/2 md:w-1/2">
        <div className="flex items-center justify-end">
          <button
            onClick={onClose}
            className="p-4 text-primary-200 transition-colors hover:text-neutral-100"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
