import React, { Component } from "react";
import { Redirect, Route} from "react-router-dom";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";

class Routes extends Component {
  state = {
    isLoading:true,
    Routes: [
      {
        route:'/',
        Route: <Route path="/home" key="home"  component={Home} />,
      },
      {
        route:'/login',
        Route: <Route path="/logIn" key="logIn"  component={LogIn} />,
      }
    ],
  };
  componentDidMount(){
    this.setState({isLoading:false});
  }
}

export default Routes;
