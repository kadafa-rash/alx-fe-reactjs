import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map(recipe => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`} >
                            <h3>{recipe.title}</h3>
              </Link>
              <Link to={`/recipes/${recipe.id}/edit`}  >
              edit
              </Link>
              <p>Prep time: {recipe.prepTime} mins</p>
              <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
