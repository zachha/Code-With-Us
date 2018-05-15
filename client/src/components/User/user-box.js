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
                Your Reputation<FontAwesomeIcon icon="star" size="1x" className="star" />:
                {this.state.user.reputation}
              </Typography>
              <Typography variant="title">
                Your Post Count <FontAwesomeIcon icon="list-ul" size="1x" className="postCountIcon" />:
                {this.state.user.postCount}
              </Typography>
            </Paper>;
        } else {
          return "Please Log-in to view your User Overview!";
        }
    }
    
};

export default UserBox;