import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <nav className = 'navbar'>
            <NavLink to ="/home"><h2>Special Aid</h2></NavLink>
            <NavLink to ="/examplelist"><h2>Chore List</h2></NavLink>
            <NavLink to ="/createlist"><h2>Create List</h2></NavLink>
            <NavLink to ="/AboutProject"> <h2>App Information</h2></NavLink>
    </nav>
    
  );
}

export default NavBar;
