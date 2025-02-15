import logo from "./logo.svg";

import "./App.css";

import React from "react";

import Home from "./Pages/home";
import Alisa from "./Pages/alisa";
import Byron from "./Pages/byron";
import Rachitha from "./Pages/rachitha";
import Salmah from "./Pages/salmah";
import Alisa2 from "./Pages/alisa2";

import { Component } from "react";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/alisa2" component={Alisa2} />
        <Route exact path="/alisa" component={Alisa} />
        <Route exact path="/byron" component={Byron} />
        <Route exact path="/rachitha" component={Rachitha} />
        <Route exact path="/salmah" component={Salmah} />
      </div>
    );
  }
}

export default App;
