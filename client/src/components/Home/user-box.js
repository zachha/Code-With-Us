import React from 'react';
import './user-box.css';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const UserBox = props => {
    return (
        <Paper elevation={3} className="user-box">
            <Typography variant="display3"><FontAwesomeIcon icon="id-card" size="2x" className="idCard"/>Hello {props.username}!</Typography>
        </Paper>
    )
};

export default UserBox;