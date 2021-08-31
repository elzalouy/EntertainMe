import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import Home from '../components/Home/Home';
class Routes extends Component {
    state = { 
        Routes:[
            {
                route: "/",
                Route: <Route path="/" key="home" component={Home} />
              }
        ]
     };
}
 
export default Routes;