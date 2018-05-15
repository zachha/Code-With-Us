import React from 'react';
import './user-box.css';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const UserBox = props => {
    return (
        <Paper elevation={3} className="user-box">
            <Typography variant="title"><FontAwesomeIcon icon="id-card" size="1x" className="idCard"/>
                {props.user?`Hello, ${props.user.username}`:""}
            </Typography>
            <Typography variant="display2"><FontAwesomeIcon icon="star" size="1x" className="star" />
                {props.user?`: ${props.user.reputation}`:""}
            </Typography>
            <Typography variant="display2"><FontAwesomeIcon icon="list-ul" size="1x" className="postCountIcon" />
                {props.user?`: ${props.user.postCount}`:""}
            </Typography>
            
        </Paper>
    )
};

export default UserBox;