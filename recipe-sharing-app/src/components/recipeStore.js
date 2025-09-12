import {create} from 'zustand';
const createSetSearchTerm = (set) => (term) => {
  set({ searchTerm: term });
  console.log(term);
};
const createSetIngredientsSearchTerm = (set) => (term) => {
  set({ searchIngredient: term });
  console.log(term);
};
const useRecipeStore = create(set => ({
  recipes: [

  ],
  searchTerm: '',
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: createSetSearchTerm(set),
  setIngredientFilter: createSetIngredientsSearchTerm(set),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )})),
    filterRecipesByIngredients: () => {
      
      set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(state.searchIngredient?.toLowerCase() || '')
        )
      )
    }));
    }}),
);
export default useRecipeStore;