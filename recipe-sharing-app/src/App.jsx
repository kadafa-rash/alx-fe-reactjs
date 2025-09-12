import React, { useEffect } from 'react';
import useRecipeStore from './components/recipeStore';
import SearchBar from './components/SearchBar';
import IngredientFilter from './components/IngredientFilter';
import PrepTimeFilter from './components/PrepTimeFilter';
import RecipeList from './components/RecipeList';


const sampleRecipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    ingredients: ["pasta", "beef", "tomato sauce"],
    prepTime: 30
  },
  {
    id: 2,
    title: "Chicken Salad",
    ingredients: ["chicken", "lettuce", "olive oil"],
    prepTime: 15
  }
];

const App = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    setRecipes(sampleRecipes);
    filterRecipes();
  }, []);

  return (
    <div>
      <h1>Recipe Finder</h1>
      <SearchBar />
      <IngredientFilter />
      <PrepTimeFilter />
      <RecipeList />
    </div>
  );
};

export default App;
