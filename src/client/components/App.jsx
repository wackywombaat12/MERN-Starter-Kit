import React, { Component } from 'react';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import Register from '../pages/Register.jsx';
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
        <main className="container-fluid">
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </main>
      </div>
    </Router>
);

export default App