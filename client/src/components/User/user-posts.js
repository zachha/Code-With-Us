import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Post from "./user-post";
import { getAllUserPosts } from "../../utils/API/dbAPI";

class UserPosts extends React.Component {
  state = {
    userId: this.props.user ? this.props.user.id : null,
    empty: false,
    Posts: []
  };

  componentDidMount = () => {
    console.log("USER" + JSON.stringify(this.props.user));
    this.loadPosts();
  };

  componentWillReceiveProps(newProps) {
    console.log("NEWPROPS" + newProps);
    this.setState({
      userId: newProps.user ? newProps.user.id : null
    });
  };

  loadPosts = () =>
    getAllUserPosts(this.props.user).then(res => {
      if(res.data[0].text) {
        this.setState({ Posts: res.data, empty: false });
        console.log("POSTS" + JSON.stringify(this.state.Posts));
      } else {
        this.setState({ Posts: [], empty: true });
      }
    });

  render() {
      if (this.state.Posts) {
        return (
            <div>
                {this.state.Posts.map(post => Post({ post: post, username: this.props.user.username }))}
            </div>
        )
      } else {
          return "User hasn't created any posts yet!";
      }
  }
};
export default UserPosts;
