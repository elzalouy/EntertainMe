import React, { Component } from "react";
import { Route} from "react-router-dom";
import Home from "../components/Home/Home";

class Routes extends Component {
  state = {
    isLoading:true,
    Routes: [
      {
        route: "/",
        Route: <Route path="/" key="home"  component={Home} />,
      },
    ],
  };
  componentDidMount(){
    this.setState({isLoading:false});
  }
}

export default Routes;
