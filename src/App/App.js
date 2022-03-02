import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Navbar from "../components/UIs/navabr/Navbar";
import Laoding from "../components/Loading/Laoding";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import LogIn from "../components/User/LogIn";
import ContactUS from "../components/ContactUs/ContactUs";
import News from "../components/News/News";
import Categories from "../components/Categories/Categories";
import CategoryDetails from "../components/Categories/CategoryDetails";
import Artist from "../components/Categories/Artist";
import Register from "../components/User/Register";
import ForgetPassword from "../components/User/ForgetPassword";
import { authed } from "../httpService/user";
import Black from "../components/ContactUs/Black";
import ResetPasswordCode from "../components/User/ResetPasswordCode";
import { checkUser, onGetUserFav } from "../store/Ui/actions";
import AuthModal from "../components/Modal/AuthModal";
import { onGetCategories } from "../store/Categories/actions";
import ErrorBoundary from "../UICore/usable-components/ErrorBoundries";

const App = () => {
  const { logged, authModal, loading } = useSelector((state) => state.UI);
  const [state] = useState({
    Routes: [
      {
        route: "/",
        Route: <Route path="/home" key="home" component={Home} />,
      },
      {
        route: "/login",
        Route: (
          <Route
            path="/logIn"
            key="logIn"
            render={(props) => {
              if (authed()) return <Redirect to="/home" />;
              else return <LogIn {...props} />;
            }}
          />
        ),
      },
      {
        route: "/register",
        Route: (
          <Route
            path="/register"
            key="register"
            render={(props) => {
              if (authed()) return <Redirect to="/home" />;
              else return <Register {...props} />;
            }}
          />
        ),
      },
      {
        route: "/forgetPassword",
        Route: (
          <Route
            path="/forgetPassword"
            key="forgetPassword"
            render={(props) => {
              if (authed()) return <Redirect to="/home" />;
              else return <ForgetPassword {...props} />;
            }}
          />
        ),
      },
      {
        route: "/ResetPasswordCode",
        Route: (
          <Route
            path="/ResetPasswordCode"
            key="ResetPasswordCode"
            render={(props) => {
              if (authed()) return <Redirect to="/home" />;
              else return <ResetPasswordCode {...props} />;
            }}
          />
        ),
      },
      {
        route: "/categories",
        Route: (
          <Route path="/categories" key="categories" component={Categories} />
        ),
      },
      {
        route: "/categoryDetails",
        Route: (
          <Route
            path="/categoryDetails/:id/:name"
            key="categoryDetails"
            component={CategoryDetails}
          />
        ),
      },
      {
        route: "/artist",
        Route: (
          <Route path="/artist/:id/:name" key="artist" component={Artist} />
        ),
      },
      {
        route: "/news",
        Route: <Route path="/news" key="news" component={News} />,
      },
      {
        route: "/contactus",
        Route: (
          <Route path="/contactUs" key="contactUs" component={ContactUS} />
        ),
      },
      {
        route: "/black",
        Route: <Route path="/black" key="black" component={Black} />,
      },
      {
        route: "redirect",
        Route: <Redirect from="/" key="redirect" to="/home" />,
      },
    ],
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(onGetCategories());
      dispatch(checkUser());
    }, 1000);
  }, [dispatch]);
  useEffect(() => {
    if (logged) {
      dispatch(onGetUserFav());
    }
  }, [dispatch, logged]);
  return (
    <React.Fragment>
        {authModal && <AuthModal />}
        {loading ? (
          <Laoding></Laoding>
        ) : (
          <BrowserRouter>
            <Navbar />
            <Switch>{state?.Routes?.map((item) => item.Route)}</Switch>
          </BrowserRouter>
        )}
    </React.Fragment>
  );
};

export default App;
