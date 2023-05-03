import React from "react";
import { useNavigate } from "react-router-dom";

const NavButton = (props) =>{

    let navigate = useNavigate();
    
    const routeChange = () =>{
        let path = props.to;
        navigate(path);
    }

    return(
        <button onClick={routeChange}>{props.text}</button>
    );

}

export default NavButton;
    