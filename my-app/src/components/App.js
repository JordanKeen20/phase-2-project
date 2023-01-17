import React from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import SpecialAid from "./SpecialAid";
import AboutProject from "./AboutHelp";
import ExamplesList from "./ExamplesList";
import ChoreDetails from "./ChoreDetails";
import NewChores from "./NewChores";








function App() {

  return (
    <>
      <NavBar />
        <Switch>
          <Route exact path = "/HelpfulInformation">
            <AboutProject />
          </Route>
          <Route exact path = "/ExamplesList">
            <ExamplesList />
          </Route>
          <Route exact path= "/CreateChore"> 
            <NewChores />
          </Route>
          <Route exact path= "/ChoreDetails/:id">
            <ChoreDetails />
          </Route>
          <Route exact path = "/home">
            <SpecialAid />
          </Route>       
        </Switch>
    </>
  );
}

export default App;
