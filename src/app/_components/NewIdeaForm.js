'use client';

import { FaHashtag } from 'react-icons/fa';
import Button from './Button';
import Modal from './Modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function NewIdeaForm({ isOpen, onClose }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: [],
    stage: 'seed',
  });
  const [tagInput, setTagInput] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleStageSelect = (stage) => {
    setFormData((prev) => ({
      ...prev,
      stage,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmiting(true);

    const res = await fetch('/api/ideas', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) router.refresh();

    setFormData({
      title: '',
      description: '',
      tags: [],
      stage: 'seed',
    });

    setIsSubmiting(false);
    onClose();
  }

  const handleTagInputKeyDown = (e) => {
    if (
      e.key === ' ' ||
      e.key === 'Spacebar' ||
      e.keyCode === 32 ||
      e.key === 'Enter' ||
      e.keyCode === 13
    ) {
      e.preventDefault();
      if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, tagInput.trim()],
        }));
        setTagInput('');
      }
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4 text-center text-xl font-semibold text-primary-50">
          Create New Idea
        </h2>
        <div className="mb-4 flex flex-col gap-2">
          <label className="text-primary-50" htmlFor="title">
            Your Idea
          </label>
          <input
            className="w-full rounded-md border border-neutral-600 bg-neutral-800 p-2 text-neutral-100 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label className="text-primary-50" htmlFor="description">
            What is it about
          </label>
          <textarea
            className="w-full rounded-md border border-neutral-600 bg-neutral-800 p-2 text-neutral-100 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2">
          <label className="text-primary-50">Tags</label>

          <div className="relative">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagInputKeyDown}
              className="flex w-full items-center justify-between rounded-lg border border-neutral-600 bg-neutral-800 p-3 text-primary-50 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Type tags and press space or enter to add"
            />
          </div>

          {formData.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-primary-800 px-3 py-1 text-sm text-primary-50"
                >
                  <FaHashtag className="mr-1" />
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-primary-200 hover:text-primary-400"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6 flex flex-col gap-2">
          <label className="text-sm font-medium text-neutral-50">
            Stage of Idea
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: 'Seed', label: 'Seed' },
              { value: 'Sprout', label: 'Sprout' },
              { value: 'Plant', label: 'Plant' },
            ].map((stage) => (
              <button
                key={stage.value}
                type="button"
                onClick={() => handleStageSelect(stage.value)}
                className={`flex flex-col items-center justify-center rounded-lg py-3 transition-colors ${
                  formData.stage === stage.value
                    ? 'bg-primary-500 text-primary-50'
                    : 'bg-neutral-800 text-primary-50 hover:bg-primary-500'
                }`}
              >
                <span className="text-sm">{stage.label}</span>
              </button>
            ))}
          </div>
        </div>
        <Button pending={isSubmiting} type="submit">
          Add new Idea
        </Button>
      </form>
    </Modal>
  );
}

export default NewIdeaForm;
