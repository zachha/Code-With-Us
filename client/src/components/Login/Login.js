import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import {login} from '../../utils/API/dbAPI';
import LoginForm from './loginForm';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username : {
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
                username: {
                    ...this.state.username,
                    value: e.target.value,
                    valid: false,
                    error: true,
                    errorMessage: "A username is required"
                }
            });
        } else {
            this.setState({
                username: {
                    ...this.state.username,
                    value: e.target.value,
                    valid: true,
                    error: false,
                    errorMessage: ""
                }
            });
        }
    }

    onPasswordChange = e => {
        if( e.target.value === "" ){
            this.setState({
                password: {
                    ...this.state.password,
                    value: e.target.value,
                    valid: false,
                    error: true,
                    errorMessage: "A password is required"
                }
            });
        } else {
            this.setState({
                password: {
                    ...this.state.password,
                    value: e.target.value,
                    valid: true,
                    error: false,
                    errorMessage: ""
                }
            });
        }
    }

    onSubmit = e => {
        e.preventDefault();

        if( this.state.username.valid && this.state.password.valid ){
            let credentials = {
                username : this.state.username.value.toLowerCase(),
                password : this.state.password.value
            }

            this.setState({
                submitEnabled: false
            });

            login(credentials)
            .then(res => {
                console.log(localStorage.getItem("CWUTOKEN"));
                this.props.loginCallback(res.user)});
                window.location.href="/";
            
        }
    }

    render(){
        return (
        <Paper elevation={3} className="form-box">
            <LoginForm 
                {...this.state}
                onUsernameChange={this.onUsernameChange}
                onPasswordChange={this.onPasswordChange}
                onSubmit={this.onSubmit}/>
        </Paper>)
    }
}