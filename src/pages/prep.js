import React from "react";
import NavButton from "../components/NavButton";
  
const Prep = () => {

  return (
    <div>
      <h1>
        Preparation!!!
      </h1>
      <NavButton to="/recipe-adjustment" text="Back" />
      <NavButton to="/recipe" text="Next" />
    </div>
  );
};
  
export default Prep;