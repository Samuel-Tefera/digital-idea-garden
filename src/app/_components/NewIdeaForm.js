'use client';

import { FaChevronDown, FaHashtag, FaSeedling } from 'react-icons/fa';
import Button from './Button';
import Modal from './Modal';
import { useState } from 'react';

function NewIdeaForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    categories: [],
    stage: 'seed',
  });

  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [customCategory, setCustomCategory] = useState('');

  const handleCategorySelect = (category) => {
    if (!formData.categories.includes(category)) {
      setFormData((prev) => ({
        ...prev,
        categories: [...prev.categories, category],
      }));
    }
    setShowCategoryDropdown(false);
  };

  const handleRemoveCategory = (categoryToRemove) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.filter((cat) => cat !== categoryToRemove),
    }));
  };

  const handleAddCustomCategory = () => {
    if (
      customCategory.trim() &&
      !formData.categories.includes(customCategory.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        categories: [...prev.categories, customCategory.trim()],
      }));
      setCustomCategory('');
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
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
          <label className="text-primary-50">Categories</label>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="flex w-full items-center justify-between rounded-lg border border-neutral-600 bg-neutral-800 p-2 text-primary-50 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <span>Select categories</span>
              <FaChevronDown
                className={`transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`}
              />
            </button>

            {showCategoryDropdown && (
              <div className="borde absolute left-0 right-0 top-full z-10 mt-1 max-h-60 overflow-y-auto rounded-lg border-neutral-600 bg-neutral-900 shadow-lg">
                {[
                  'Creativity',
                  'Research',
                  'Product',
                  'Art',
                  'Writing',
                  'Innovation',
                  'Technology',
                  'Design',
                  'Learning',
                  'Collaboration',
                  'Other',
                ].map((category) => (
                  <div
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="cursor-pointer border-b border-neutral-800 p-3 text-primary-50 hover:bg-neutral-800"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>

          {formData.categories.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {formData.categories.map((category, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-neutral-800 px-3 py-1 text-sm text-primary-50"
                >
                  <FaHashtag className="mr-1" />
                  {category}
                  <button
                    type="button"
                    onClick={() => handleRemoveCategory(category)}
                    className="ml-2 text-primary-600 hover:text-primary-800"
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
              { value: 'seed', label: 'Seed' },
              { value: 'sprout', label: 'Sprout' },
              { value: 'plant', label: 'Plant' },
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
        <Button type="submit">Add new Idea</Button>
      </form>
    </Modal>
  );
}

export default NewIdeaForm;
