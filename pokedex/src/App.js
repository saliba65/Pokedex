import React from "react";
import { Route, Switch } from "react-router-dom";
import Pokedex from "./pages/Pokedex/Pokedex";
import Pokemon from "./pages/Pokemon/Pokemon";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Pokedex {...props} />} />
      <Route
        exact
        path="/:pokemonId"
        render={(props) => <Pokemon {...props} />}
      />
    </Switch>
  );
}

export default App;
