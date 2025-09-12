import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import useRecipeStore from './components/recipeStore';
import SearchBar from './components/SearchBar';
import IngredientFilter from './components/IngredientFilter';
import PrepTimeFilter from './components/PrepTimeFilter';
import RecipeList from './components/RecipeList';

import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail';

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
    <Router>
      <div>
        <h1>Recipe Finder</h1>
        <Routes>
      
          <Route path="/" element={
            <>
              <SearchBar />
              <IngredientFilter />
              <PrepTimeFilter />
              <RecipeList />
            </>
          } />

    
          <Route path="/add" element={<AddRecipeForm />} />

          
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
