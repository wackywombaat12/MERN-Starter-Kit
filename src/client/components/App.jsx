import React, { Component } from 'react';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import Nav from './Nav.jsx';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const App = () => (
    <Router>
      <div>
        <Nav/>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
);

export default App