import React, { Component } from 'react';
const axios = require('axios');

export default class Register extends Component {

    constructor (props) {
        super(props);

        this.state = {
          email: '',
          name: '',
          password: ''
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        console.log(this.state.email);
        axios.post('/api/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        });
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="register-page">
                <form className="form-signin">
                    <h1>Register</h1>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="name"
                            onChange={(event) => this.handleUserInput(event)}
                            value={this.state.name}
                            className="form-control" 
                            id="exampleInputname" 
                            aria-describedby="nameHelp" 
                            placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <input 
                            type="email"
                            name="email"
                            onChange={(event) => this.handleUserInput(event)}
                            value={this.state.email}
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password"
                            name="password"
                            onChange={(event) => this.handleUserInput(event)}
                            value={this.state.password}
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password" />
                    </div>
                    <button 
                        type="submit"
                        onClick={this.handleClick}
                        className="btn btn-lg btn-primary btn-block">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
};