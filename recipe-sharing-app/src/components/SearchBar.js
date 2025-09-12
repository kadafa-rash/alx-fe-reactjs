// SearchBar.js
import React, { useEffect } from 'react';
import  useRecipeStore  from './recipeStore';

const SearchBar = () => {
    const {
    filterRecipes,
    setSearchTerm,
    searchTerm
  } = useRecipeStore();
  //const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  useEffect(() => {
    filterRecipes();
  }, [searchTerm]);

  return React.createElement('input', {
    type: 'text',
    placeholder: 'Search by title',
    onChange: (event) => setSearchTerm(event.target.value),
    style: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
      boxSizing: 'border-box'
    }
  });
};

export default SearchBar;
