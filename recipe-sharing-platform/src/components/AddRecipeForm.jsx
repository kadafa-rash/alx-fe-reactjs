import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients, separated by commas.';
    }

    if (!steps.trim()) newErrors.steps = 'Preparation steps are required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      title: title.trim(),
      ingredients: ingredients.trim().split(',').map(i => i.trim()),
      steps: steps.trim(),
    };

    console.log('Submitted Recipe:', newRecipe);

    // Reset form
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Add New Recipe</h2>

      {/* Title Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Recipe Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* Ingredients Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ingredients (separated by commas)
        </label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={3}
          className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., 2 eggs, 1 cup flour, 1/2 cup milk"
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      {/* Preparation Steps Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preparation Steps
        </label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows={4}
          className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Write step-by-step instructions here..."
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit Recipe
        </button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
