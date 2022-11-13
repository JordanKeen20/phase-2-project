import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <nav className = 'navbar'>
            <NavLink to ="/home">Special Aid</NavLink>
            <NavLink to ="/AboutProject"> App Information</NavLink>
            <NavLink to ="/createlist">Create List</NavLink>
            <NavLink to ="/examplelist">Example List</NavLink>
    </nav>
    
  );
}

export default NavBar;
