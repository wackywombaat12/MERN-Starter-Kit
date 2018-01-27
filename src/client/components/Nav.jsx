import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';

export default class Login extends Component {

    getUser() {
        var data = {};
        if (localStorage.getItem('user')) {
            data = JSON.parse(localStorage.getItem('user'))
            return data.user;
        }
        return false;
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink activeClassName='is-active' className='navbar-brand' to="/">
                    <img src={require('../img/logo-5.svg')} height="35" className="d-inline-block align-top" alt="" />
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeClassName='is-active' className='nav-link' to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='is-active' className='nav-link' to="/register">Register</NavLink>
                        </li>
                    </ul>
                </div>
                <a href="#">
                {this.getUser()}</a>
            </nav>
        );
    }
};