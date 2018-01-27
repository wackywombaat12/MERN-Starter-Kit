import React, { Component } from 'react';
import FormErrors from '../components/FormErrors.jsx';
const axios = require('axios');
import { withRouter } from "react-router-dom";

class Register extends Component {

    constructor (props) {
        super(props);

        this.state = {
          email: '',
          name: '',
          password: '',
          formErrors: {name: '', email: '', password: ''},
          emailValid: false,
          passwordValid: false,
          nameValid: false,
          formValid: false

        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        console.log(document.cookie);
    }
    
    handleClick() {
        axios.post('/api/user/register', {
            fullName: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
        .then(response => {
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response.data));
            this.props.history.push("/");
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let nameValid = this.state.nameValid;
      
        switch(fieldName) {
        case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
        case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
        case 'name':
            nameValid = value.length >= 1;
            fieldValidationErrors.name = nameValid ? '': ' please provide a name';
            break;
        default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        nameValid: nameValid
                      }, this.validateForm);
      }
      
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.nameValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <div className="register-page">
                <form className="form-signin">
                    <h1>Register</h1>
                    <div 
                        className={'form-group ${this.errorClass(this.state.formErrors.email)}'}>
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
                        type="button"
                        onClick={this.handleClick}
                        disabled={!this.state.formValid}
                        className="btn btn-lg btn-primary btn-block">
                        Submit
                    </button>
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                </form>
            </div>
        );
    }
};

export default withRouter(Register);