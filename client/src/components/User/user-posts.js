import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import UserPost from "./user-post";
import { getAllUserPosts } from "../../utils/API/dbAPI";

class UserPosts extends React.Component {
  state = {
    userId: this.props.user ? this.props.user.id : null,
    Posts: []
  };

  componentDidMount = () => {
    this.loadPosts();
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      userId: newProps.user ? newProps.user.id : null
    });
  };

  loadPosts = () =>
    getAllUserPosts(this.props.user).then(res => {
      if(res.data[0]) {
        this.setState({ Posts: res.data });
      } else {
        this.setState({ Posts: [] });
      }
    });

  render() {
      if (this.state.Posts.length != 0) {
        return (
            <div>
                {this.state.Posts.map(post => UserPost({ post: post, username: this.props.user.username }))}
            </div>
        )
      } else {
          return <div className="noPosts">
          <p> User hasn't created any posts yet! </p>
            </div>
      }
  }
};
export default UserPosts;
