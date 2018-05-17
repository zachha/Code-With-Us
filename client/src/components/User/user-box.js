import React from 'react';
import './user-box.css';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class UserBox extends React.Component {
    state = {
        user: this.props.user,
        value: 0
    };

    render() {
        if (this.state.user) {
          return <Paper elevation={3} className="user-box">
              <Typography variant="title">
                <FontAwesomeIcon icon="id-card" size="1x" className="idCard" />
                Hello, {this.state.user.username}
              </Typography>
              <Typography variant="title">
                <FontAwesomeIcon icon="star" size="1x" className="star" />
                Your Reputation: {this.state.user.reputation}
              </Typography>
              <Typography variant="title">
                <FontAwesomeIcon icon="list-ul" size="1x" className="postCountIcon" />
                Your Post Count: {this.state.user.postCount}
              </Typography>
            </Paper>;
        } else {
          return "Please Log-in to view your User Overview!";
        }
    }
    
};

export default UserBox;