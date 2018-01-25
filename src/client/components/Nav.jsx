import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
                    </ul>
                </div>
            </nav>
        );
    }
};