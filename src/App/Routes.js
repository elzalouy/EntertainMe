import React, { Component } from "react";
import { Route} from "react-router-dom";
import Home from "../components/Home/Home";
import Laoding from "../components/Loading/Laoding";

class Routes extends Component {
  state = {
    Routes: [
      // {
      //   route: "/",
      //   Route: <Route path="/" key="Loading" component={Laoding} />,
      // },
      {
        route: "/home",
        Route: <Route path="/home" key="home" component={Home} />,
      }
    ],
  };
}

export default Routes;
