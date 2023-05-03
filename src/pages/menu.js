import React from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "../components/NavButton";
  
const Menu = () => {



  return (
    <div>
      <h1>
        Menu
      </h1>
      <NavButton to="/recipe-adjustment" text="Tetsuyo Kazuya" />
      <NavButton to="/create-recipe" text="Create New Recipe" />
    </div>
  );
};
  
export default Menu;