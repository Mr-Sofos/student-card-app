import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Card from "./Card";
import AddCard from "./AddCard";

function App() {
  return (
    <Switch>
      <Route path="/card" component={Card} />
      <Route exact path="/" component={AddCard} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
