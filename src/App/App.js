import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch } from "react-router-dom";

import Routes from "./Routes";

class App extends Routes {
  render() { 
    return (
      <BrowserRouter>
      <Switch>{this.state.Routes.map(item=>item.Route)}</Switch>
      </BrowserRouter>
     );
  }
}
 
export default App;