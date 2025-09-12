import useRecipeStore from './recipeStore';

const PrepTimeFilter = () => {
  const setMaxPrepTime = useRecipeStore(state => state.setMaxPrepTime);

  return (
    <input
      type="number"
      placeholder="Max prep time (mins)"
      onChange={(event) => setMaxPrepTime(Number(event.target.value))}
    />
  );
};

export default PrepTimeFilter;
