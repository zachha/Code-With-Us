import React from 'react';
import './css/user-box.css';
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
//import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class UserBox extends React.Component {
  state = {
    user: this.props.user,
    value: 0
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      user: newProps.user ? newProps.user : null
    });
  }

  render() {
    if (this.state.user) {
      return (
        <div className="userBox">
          <List>
            <ListItem>
              <Avatar aria-label={this.state.user.username} color="primary">
                {this.state.user.username[0]}
              </Avatar>
              <ListItemText
                primary={this.state.user.username}
                secondary={
                  "User joined on " //{this.state.user.createdAt}
                }
              />
            </ListItem>
            <ListItem>
              <Avatar>
                <Icon color="primary">insert_comment</Icon>
              </Avatar>
              <ListItemText
                primary="Post Count"
                secondary={this.state.user.postCount}
              />
            </ListItem>
            <ListItem>
              <Avatar>
                <Icon color="error">whatshot</Icon>
              </Avatar>
              <ListItemText
                primary="Reputation"
                secondary={this.state.user.reputation}
              />
            </ListItem>
          </List>
        </div>
      );
    } else {
      return "Please Log-in to view your User Overview!";
    }
  }
};

export default UserBox;