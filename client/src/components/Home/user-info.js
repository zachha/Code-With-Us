import React from 'react';
import './user-info.css';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const UserInfo = props => {
    if(props.user) {
        return (
        <React.Fragment>
            <Typography variant="title">
                <FontAwesomeIcon icon="id-card" size="1x" className="idCard"/>
                {props.user.username}
                <FontAwesomeIcon icon="star" size="1x" className="star" />
                {props.user.reputation}
                <FontAwesomeIcon icon="list-ul" size="1x" className="postCountIcon" />
                {props.user.postCount}
            </Typography>
        </React.Fragment>
        )
    } else {
        return (
            "Log-in!"
        )
    }
    
};

export default UserInfo;