import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "reset-css";

import Lobby from "./components/Lobby";
import Game from "./components/Game";

const App = () => (
  <Router>
    <GlobalStyle />
    <Switch>
      <Route path="/" exact>
        <Lobby />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
    </Switch>
  </Router>
);

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Balsamiq Sans', cursive;
    background: #45aaf2;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default App;
