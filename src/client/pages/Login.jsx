import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
                <div className="login-page">
                    <form className="form-signin">
                        <img src = {require('../img/logo-5.svg')} />
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
        );
    }
};