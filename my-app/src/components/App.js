import React, { useState }from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import CreateList from "./CreateChore";
import ExampleList from "./CreateChore";
import IdkList from "./idklist";
import SpecialAid from "./SpecialAid";


function App() {
  const [page, setPage] = useState('/')

  return (
    <>
      <NavBar setPageChange = {setPage}/>
        <Switch>
          <Route path = "specialaid">
            <SpecialAid />
          </Route>
          <Route path = "createlist">
            <CreateList />
          </Route>
          <Route path = "examplelist">
            <ExampleList />
          </Route>
          <Route path = "idklist">
            <IdkList />
          </Route>
        </Switch>
    </>
  );
}

export default App;
