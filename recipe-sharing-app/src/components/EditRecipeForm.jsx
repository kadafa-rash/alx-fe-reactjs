
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
  event.preventDefault();
  updateRecipe(recipe.id, { title, description });
};


  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
