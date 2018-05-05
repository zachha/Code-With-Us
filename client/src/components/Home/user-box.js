import React from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const UserBox = props => {
    return (
        <Paper elevation={3} className="user-box">
            <Typography variant="title">Hello! {props.username}</Typography>
        </Paper>
    )
};

export default UserBox;