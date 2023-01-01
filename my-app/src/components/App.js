import React, { useState }from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import CreateList from "./NewChores";
import ExampleList from "./ExampleItem";
import AboutProject from "./AboutHelp";
import SpecialAid from "./SpecialAid";



function App() {

  return (
    <>
      <NavBar />
        <Switch>
          <Route exact path = "/home">
            <SpecialAid />
          </Route>
          <Route exact path= "/createChore">
            <CreateList />
          </Route>
          <Route exact path = "/ChoreList">
            <ExampleList />
          </Route>
          <Route exact path = "/HelpfulInformation">
            <AboutProject />
          </Route>
        </Switch>
    </>
  );
}

export default App;
