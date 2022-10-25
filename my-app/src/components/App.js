import React, { useState }from "react";
import NavBar from "./NavBar";





function App() {
  const [page, setPage] = useState('/')

  function currentPage(){
    switch(page){
      
    }
  }
 

  return (
    <div>
    <NavBar setPageChange = {setPage}
     {currentPage}
    />
    </div>
  );
}

export default App;
