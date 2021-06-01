import React from "react";
import { Route, Switch } from "react-router-dom";
import Pokedex from "./pages/Pokedex/Pokedex";
import Pokemon from "./pages/Pokemon/Pokemon";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Switch>
      <Route exact path="/login" render={(props) => <Login {...props} />} />
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
