import React, { useState }from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import CreateList from "./NewChores";
import ExampleList from "./ExampleList";
import AboutProject from "./AboutProject";
import SpecialAid from "./SpecialAid";



function App() {

  return (
    <>
      <NavBar />
        <Switch>
          <Route exact path = "/home">
            <SpecialAid />
          </Route>
          <Route exact path= "/createlist">
            <CreateList />
          </Route>
          <Route exact path = "/examplelist">
            <ExampleList />
          </Route>
          <Route exact path = "/AboutProject">
            <AboutProject />
          </Route>
        </Switch>
    </>
  );
}

export default App;
