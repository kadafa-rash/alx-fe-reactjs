import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );
  const addFavourite = useRecipeStore((state) => state.addFavourite);
  const removeFavourite = useRecipeStore((state) => state.removeFavourite);
  const favourites = useRecipeStore((state) => state.favourites);

  if (!recipes || recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}
        >
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <div>
            <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: '10px' }}>
              Edit
            </Link>
            <DeleteRecipeButton recipeId={recipe.id} />
            {favourites.includes(recipe.id) ? (
              <button onClick={() => removeFavourite(recipe.id)}>Remove Favourite</button>
            ) : (
              <button onClick={() => addFavourite(recipe.id)}>Add Favourite</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
