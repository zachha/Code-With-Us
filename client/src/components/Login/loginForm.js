import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

const inputStyles = {
    width: "350px",
    marginBottom: "25px"
};

const LoginForm = props => (
    <form className="login-form">
        <Typography variant="title" align="center">Login</Typography>
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
            label="Password"
            type="password"
            style={inputStyles}
            onChange={props.onPasswordChange}
            value={props.password.value}
            error={props.password.error}
            helperText={props.password.errorMessage} />
        <br />
        <div className="form-navigation">
            <Button
                variant="raised"
                className="form-button"
                type="submit"
                color="primary"
                onClick={props.onSubmit}
                disabled={!props.submitEnabled}>Log in</Button>
            <Link to="/signup">
                <Button
                    className="form-button"
                    variant="raised">Sign Up</Button>
            </Link>
        </div>
    </form>
);

export default LoginForm;