import React, { Component } from 'react';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import Register from '../pages/Register.jsx';
import Nav from './Nav.jsx';
const axios = require('axios');
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

const App = () => (
    <Router>
      <div>
        <Nav/>
        <main className="container-fluid">
          <PrivateRoute exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </main>
      </div>
    </Router>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    document.cookie
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

const authenticated = () => {
  axios.get('/api/user/auth')
    .then(response => {
        console.log(response);
        return true;
    })
    .catch(error => {
        console.log(error);
        return false;
  })
}

export default App