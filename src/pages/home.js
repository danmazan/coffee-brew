import React from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "../components/NavButton";
  
const Home = () => {


  return (
    <div>
      <h1>
        HOME
      </h1>
      <NavButton to="/menu" text="Start" />
    </div>
  );
};
  
export default Home;