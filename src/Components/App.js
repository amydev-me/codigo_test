import React from 'react';
import LoginForm from './LoginPage';
import MainPage from './MainPage';
import PrivateRoute from '../Helpers/PrivateRoute';

import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";


class App extends React.Component {
   render(){
        return (
           <Router>
                <PrivateRoute path="/" exact component={MainPage} />
                <Route path="/login" exact component={LoginForm} />
           </Router> 
        );
   }
}

export default App;