import React, { useState }from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import CreateList from "./CreateChore";
import ExampleList from "./ExampleList";
import IdkList from "./idklist";
import SpecialAid from "./SpecialAid";


function App() {
  const [page, setPage] = useState('/')

  return (
    <>
      <NavBar setPageChange = {setPage}/>
        <Switch>
          <Route exact path = "/specialaid">
            <SpecialAid />
          </Route>
          <Route exact path= "/createlist">
            <CreateList />
          </Route>
          <Route exact path = "/examplelist">
            <ExampleList />
          </Route>
          <Route exact path = "/idklist">
            <IdkList />
          </Route>
        </Switch>
    </>
  );
}

export default App;
