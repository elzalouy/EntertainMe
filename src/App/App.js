import "./App.css";
import Routes from "./Routes";
import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";

 
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