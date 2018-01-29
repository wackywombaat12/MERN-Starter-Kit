import React, { Component } from 'react';
import {
    NavLink,
    withRouter
} from 'react-router-dom';

class Nav extends Component {

    constructor (props) {
        super(props);

        this.logOut = this.logOut.bind(this);
    }

    getUser() {
        var data = {};
        if (localStorage.getItem('user')) {
            data = JSON.parse(localStorage.getItem('user'))
            return data.user;
        }
        return false;
    }

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('user');
        this.props.history.push("/login");
    }

    renderLink() {
        if (!this.getUser()) {
            return (
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <NavLink activeClassName='is-active' className='dropdown-item' to="/login">Login</NavLink>
                    <NavLink activeClassName='is-active' className='dropdown-item' to="/register">Register</NavLink>
                </div>
            );
        }
        return (
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a className='dropdown-item' href="/account">{this.getUser()}</a>
                <a className='dropdown-item'  onClick={this.logOut}>Logout</a>
            </div>
        )
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
                    <ul className="navbar-nav w-100">
                        <li className="nav-item dropdown ml-auto">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                My Account
                            </a>
                            {this.renderLink()}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default withRouter(Nav);