import React from 'react';
import './user-box.css';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const UserBox = props => {
    return (
        <Paper elevation={3} className="user-box">
            <Typography variant="display2"><FontAwesomeIcon icon="id-card" size="1x" className="idCard"/>{props.username}</Typography>
            <Typography variant="display2"><FontAwesomeIcon icon="star" size="1x" className="star" />: {props.reputation}</Typography>
            <Typography variant="display2"><FontAwesomeIcon icon="list-ul" size="1x" className="postCountIcon" />: {props.postCount}</Typography>
        </Paper>
    )
};

export default UserBox;