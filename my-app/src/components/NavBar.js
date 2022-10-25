import React from "react";
import SpecialAid from "./SpecialAid";
import CreateChore from "./CreateChore";


function NavBar() {
    const NavBarStyle = {
        backgroundColor: "darkblue",
        color: "white"
    }

  return (
    <>
    <nav className = 'navbar'>
        <a href="/special-aid" className="special-aid">Special Aid</a>
        <ul>
            <li>
                <a href="/createList">Create List</a>
            </li>
            <li>
                <a href="/examplelist">Example List</a>
            </li>
            <li>
                <a href="/randomlist">IDK list</a>
            </li>
        </ul>
    </nav>
    <div>
    <SpecialAid />
    <CreateChore />
    
    </div>
    </>
  );
}

export default NavBar;
