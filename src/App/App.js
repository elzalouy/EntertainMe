import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from "./Routes";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Navbar from '../components/navabr/navbar';

class App extends Routes {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <BrowserRouter>
          <Switch>{this.state.Routes.map((item) => item.Route)}</Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
