import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import SpecialAid from "./SpecialAid";
import AboutProject from "./AboutHelp";
import ExamplesList from "./ExamplesList";
import ChoreDetails from "./ChoreDetails";
import NewChores from "./NewChores";








function App() {
  const [chores, setChores] = useState([]);

  return (
    <>
      <NavBar />
        <Switch>
          <Route exact path = "/HelpfulInformation">
            <AboutProject />
          </Route>
          <Route exact path = "/ExamplesList">
            <ExamplesList chores ={chores} setChores ={setChores} />
          </Route>
          <Route exact path= "/CreateChore"> 
            <NewChores setChores ={setChores} />
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
