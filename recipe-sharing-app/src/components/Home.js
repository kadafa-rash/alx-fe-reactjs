import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const Home = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h1>Recipes</h1>
      <Link to="/add">Add New Recipe</Link>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
