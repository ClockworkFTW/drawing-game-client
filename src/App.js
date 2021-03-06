import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "reset-css";

import bg from "./assets/bg.png";

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
    background-image: ${() => `url(${bg})`};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default App;
