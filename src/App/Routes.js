import React, { Component } from "react";
import { Redirect, Route} from "react-router-dom";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import ContactUS from "../components/ContactUs/ContactUs";
import News from "../components/News/News";
import Categories from "../components/Categories/Categories";

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
      },
      {
        route:'/categories',
        Route:<Route path="/categories" key="categories"  component={Categories}/>,
      },
      {
        route:'/news',
        Route:<Route path="/news" key="news"  component={News}/>,
      },
      {
        route:'/contactus',
        Route:<Route path="/contactUs" key="contactUs"  component={ContactUS}/>,
      },
      {
        route:'/tohome',
        Route:<Redirect from='/' to='/home'/>,
      }
    ],
  };
  componentDidMount(){
    this.setState({isLoading:false});
  }
}

export default Routes;