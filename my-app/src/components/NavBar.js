import React from "react";
import SpecialAid from "./SpecialAid";
import CreateChore from "./CreateChore";

function NavBar({ setPageChange }){
  function handleLinkClick(e){
    e.preventDefault()
    setPageChange(e.target.pathname)
  }

  return (
    <>
    <nav className = 'navbar'>
            <a onClick={handleLinkClick} href="/specialaid">Special Aid</a>
            <a onClick={handleLinkClick} href="/createlist">Create List</a>
            <a onClick={handleLinkClick} href="/examplelist">Example List</a>
            <a onClick={handleLinkClick} href="/idklist">IDK list</a>
    </nav>
    <div>
    <SpecialAid />
    <CreateChore />
    
    </div>
    </>
  );
}

export default NavBar;
