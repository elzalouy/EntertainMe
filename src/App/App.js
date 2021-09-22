import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Routes from "./Routes";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Navbar from "../components/UIs/navabr/navbar";
import Laoding from "../components/Loading/Laoding";
import { Provider } from "react-redux";
import store from '../store';

class App extends Routes {   
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
        {this.state.isLoading ? (
          <Laoding></Laoding>
          ) : (
            <BrowserRouter>
            <Navbar />
            <Switch>{this.state.Routes.map((item) => item.Route)}</Switch>
          </BrowserRouter>
        )}
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
