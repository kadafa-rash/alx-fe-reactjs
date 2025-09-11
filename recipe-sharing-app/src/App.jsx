import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import Home from './components/Home';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
};

export default App;

