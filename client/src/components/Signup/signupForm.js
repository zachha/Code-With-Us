import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

const inputStyles = {
    width: "350px",
    marginBottom: "25px"
};

const SignupForm = props => (
    <form className="signup-form">
        <Typography variant="title" align="center">Sign Up</Typography>
        <TextField
            autoFocus
            label="Username"
            style={inputStyles}
            onChange={props.onUsernameChange}
            value={props.username.value}
            error={props.username.error}
            helperText={props.username.errorMessage} />
        <br />
        <TextField
            type="email"
            label="Email"
            style={inputStyles}
            onChange={props.onEmailChange}
            value={props.email.value}
            error={props.email.error}
            helperText={props.email.errorMessage} />
        <br />
        <TextField
            label="Password"
            type="password"
            style={inputStyles}
            onChange={props.onPasswordChange}
            value={props.password.value}
            error={props.password.error}
            helperText={props.password.errorMessage} />
        <br />
        <TextField
            label="Verify Password"
            type="password"
            style={inputStyles}
            onChange={props.onVerifyPasswordChange}
            value={props.verifyPassword.value}
            error={props.verifyPassword.error}
            helperText={props.verifyPassword.errorMessage} />
        <br />
        <div className="form-navigation">
                <Button
                    variant="raised"
                    className="form-button"
                    type="submit"
                    color="primary"
                    onClick={props.onSubmit}
                    disabled={!props.submitEnabled}>Sign Up</Button>
                <Link to="/login">
                    <Button
                        className="form-button"
                        variant="raised">Log In</Button>
                </Link>
        </div>
    </form>
)
export default SignupForm;