import React, { Component } from 'react';
import FormErrors from '../components/FormErrors.jsx';
const axios = require('axios');

export default class Login extends Component {

    constructor (props) {
        super(props);

        this.state = {
          email: '',
          password: '',
          formErrors: { email: '', password: ''},
          emailValid: false,
          passwordValid: false,
          formValid: false

        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    handleClick() {
        axios.post('/api/user/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(response => {
            console.log(response);
            console.log(document.cookie);
        })
        .catch(error => {
            console.log(error);
        });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
        case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
        case 'password':
            passwordValid = value.length > 0;
            fieldValidationErrors.password = passwordValid ? '': ' please provide a password';
            break;
        default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                      }, this.validateForm);
      }
      
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    render() {
        return (
            <div className="login-page">
                <form className="form-signin">
                    <img src = {require('../img/logo-5.svg')} className="login-logo"/>
                    <div className="form-group">
                        <input 
                            type="email"
                            name="email"
                            onChange={(event) => this.handleUserInput(event)}
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
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                    </div>
                    <button 
                        type="button"
                        disabled={!this.state.formValid}
                        onClick={this.handleClick}
                        className="btn btn-lg btn-primary btn-block">Submit</button>
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                </form>
            </div>
        );
    }
};