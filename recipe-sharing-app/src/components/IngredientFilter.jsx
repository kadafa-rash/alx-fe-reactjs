import React, { useEffect} from 'react';
import useRecipeStore from './recipeStore';

const IngredientFilter = () => {
  //const setIngredientFilter = useRecipeStore(state => state.setIngredientFilter);
   const {
    filterRecipesByIngredients,
    setIngredientFilter,
    searchIngredient
  } = useRecipeStore();
  //const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  useEffect(() => {
    filterRecipesByIngredients();
  }, [searchIngredient]);

  return (
    <input
      type="text"
      placeholder="Filter by ingredient..."
      onChange={(event) => setIngredientFilter(event.target.value)}
    />
  );
};

export default IngredientFilter;
