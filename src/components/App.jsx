import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from '../pages/home';
import Menu from '../pages/menu';
import RecipeAdjustment from '../pages/recipe-adjustment';
import Prep from '../pages/prep';
import Recipe from '../pages/recipe';
import CreateRecipe from '../pages/create-recipe';


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/recipe-adjustment' element={<RecipeAdjustment />} />
                <Route path='/prep' element={<Prep />} />
                <Route path='/recipe' element={<Recipe />} />
                <Route path='/create-recipe' element={<CreateRecipe />} />
            </Routes>
        </Router>
    )
}

export default App;