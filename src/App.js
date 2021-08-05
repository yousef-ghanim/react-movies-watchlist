import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Add } from "./components/Add";
import { Watched } from "./components/Watched";
import { Watchlist } from "./components/Watchlist";
import { FaBeer } from "react-icons/fa";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Watchlist />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
