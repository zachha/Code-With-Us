import React, { Component } from 'react';

import Paper from 'material-ui/Paper';

import SignupForm from './signupForm';

const email = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

export default class Signup extends Component {
    constructor(props){
        super(props);

        this.state = {
            username : {
                value : "", // value of the input
                valid : false, 
                error : false,
                errorMessage : ""
            },
            email : {
                value : "",
                valid : false,
                error : false,
                errorMessage : ""
            },
            password : {
                value : "",
                valid : false,
                error : false,
                errorMessage : ""
            },
            verifyPassword : {
                value : "",
                valid : false,
                error : false,
                errorMessage : ""
            },
            submitEnabled : true,
            snackbar : {
                open : false,
             message : ""
            }
        };
    }

    onUsernameChange = e => {
        if( e.target.value === "" ){
            this.setState({
                username : {
                    ...this.state.username,
                    value: e.target.value,
                    error: true,
                    errorMessage: "A username is required",
                    valid: false
                }
            });
        } else if( e.target.value.length <= 4 ){
            this.setState({
                username : {
                    ...this.state.username,
                    value: e.target.value,
                    error: true,
                    errorMessage: "Your username must be at least 5 characters",
                    valid: false
                }
            });
        } else {
            this.setState({
                username : {
                    ...this.state.username,
                    value: e.target.value,
                    error: false,
                    errorMessage: "",
                    valid: true
                }
            });
        }
    };

    onEmailChange = e => {
        if( e.target.value === "" ){
            this.setState({
                email : {
                    ...this.state.email,
                    value: e.target.value,
                    error: true,
                    errorMessage: "An email is required",
                    valid: false
                }
            });
        } else if( (email.test(e.target.value)) === false ){
            this.setState({
                email : {
                    ...this.state.email,
                    value: e.target.value,
                    error: true,
                    errorMessage: "Please enter a valid email",
                    valid: false
                }
            });
        } else {
            this.setState({
                email : {
                    ...this.state.email,
                    value: e.target.value,
                    error: false,
                    errorMessage: "",
                    valid: true
                }
            });
        }
    }

    onPasswordChange = e => {
        if( e.target.value === "" ){
            this.setState({
                password : {
                    ...this.state.password,
                    value: e.target.value,
                    error: true,
                    errorMessage: "A password is required",
                    valid: false
                }
            });
        } else if( e.target.value.length <= 4 ){
            this.setState({
                password : {
                    ...this.state.password,
                    value: e.target.value,
                    error: true,
                    errorMessage: "Your password is too short",
                    valid: false
                }
            });
        } else {
            this.setState({
                password : {
                    ...this.state.password,
                    value: e.target.value,
                    error: false,
                    errorMessage: "",
                    valid: true
                }
            });
        }   
    }

    onVerifyPasswordChange = e => {
        if( e.target.value === "" ){
            this.setState({
                verifyPassword : {
                    ...this.state.verifyPassword,
                    value: e.target.value,
                    error: true,
                    errorMessage: "Please verify your password",
                    valid: false
                }
            });
        } else if( e.target.value !== this.state.password.value ){
            this.setState({
                verifyPassword : {
                    ...this.state.verifyPassword,
                    value: e.target.value,
                    error: true,
                    errorMessage: "Your passwords must match",
                    valid: false
                }
            });
        } else {
            this.setState({
                verifyPassword : {
                    ...this.state.verifyPassword,
                    value: e.target.value,
                    error: false,
                    errorMessage: "",
                    valid: true
                }
            });
        }
    }

    onSubmit = e => {
        e.preventDefault();
        if( this.state.username.valid &&
            this.state.email.valid &&
            this.state.password.valid &&
            this.state.verifyPassword.valid ){
                this.setState({
                    submitEnabled: false
                });
                let userCredentials = {
                    username: this.state.username.toLowerCase(),
                    email: this.state.email,
                    password: this.state.password
                } ;
                console.log("Submitting");
                //axios request the sign up form here with credentials
        }
    }

    render(){
        return (
            <Paper elevation={3} className="form-box">
                <SignupForm 
                    {...this.state}
                    onUsernameChange={this.onUsernameChange}
                    onEmailChange={this.onEmailChange}
                    onPasswordChange={this.onPasswordChange}
                    onVerifyPasswordChange={this.onVerifyPasswordChange}
                    onSubmit={this.onSubmit} />
            </Paper>
        )
    }
}