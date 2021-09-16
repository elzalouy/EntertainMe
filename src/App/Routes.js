import React, { Component } from "react";
import { Redirect, Route} from "react-router-dom";
import Home from "../components/Home/Home";
import LogIn from "../components/User/LogIn";
import ContactUS from "../components/ContactUs/ContactUs";
import News from "../components/News/News";
import Categories from "../components/Categories/Categories";
import CategoryDetails from "../components/Categories/CategoryDetails";
import Artist from "../components/Categories/Artist";
import Register from "../components/User/Register";
import ForgetPassword from "../components/User/ForgetPassword";

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
        route:'/register',
        Route:<Route path="/register" key="register"  component={Register}/>,
      },
      {
        route:'/forgetPassword',
        Route:<Route path="/forgetPassword" key="forgetPassword"  component={ForgetPassword}/>,
      },
      {
        route:'/categories',
        Route:<Route path="/categories" key="categories"  component={Categories}/>,
      },
      {
        route:'/categoryDetails',
        Route:<Route path="/categoryDetails/:id/:name" key="categoryDetails"  component={CategoryDetails}/>,
      },
      {
        route:'/artist',
        Route:<Route path="/artist/:id/:name" key="artist"  component={Artist}/>,
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
        Route:<Redirect from='/' key='/redirect' to='/home'/>,
      }
    ],
  };
  componentDidMount(){
    this.setState({isLoading:false});
  }
}

export default Routes;