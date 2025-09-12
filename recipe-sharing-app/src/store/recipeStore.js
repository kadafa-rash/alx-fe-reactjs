
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: '1', title: 'Spaghetti Bolognese', description: 'Classic Italian dish' },
    { id: '2', title: 'Chicken Curry', description: 'Spicy and flavorful' },
  ],

  addRecipe: (title, description) =>
    set((state) => ({
      recipes: [...state.recipes, { id: uuidv4(), title, description }],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
}));

