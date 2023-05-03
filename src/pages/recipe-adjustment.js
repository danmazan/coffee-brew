import React from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "../components/NavButton";

const RecipeAdjustment = () => {
    return (
        <div>
            <h1>
                RecipeAdjustment
            </h1>
            <NavButton to="/menu" text="Back" />
            <NavButton to="/prep" text="Next" />
        </div>
    );
};

export default RecipeAdjustment;