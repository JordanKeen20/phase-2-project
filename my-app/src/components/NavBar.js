import React from "react";
import { NavLink } from "react-router-dom";



function NavBar(){
  return (
    <nav className = 'navbar'>
            <NavLink to ="/home"><h2>Special Aid</h2></NavLink>
            <NavLink to ="/ExamplesList"><h2>Chore List</h2></NavLink>
            <NavLink to ="/CreateChore"><h2>Create List</h2></NavLink>
            <NavLink to ="/HelpfulInformation"> <h2>Helpful Information</h2></NavLink>
    </nav>
    
  );
}

export default NavBar;
