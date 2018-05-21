import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import UserThread from "./user-thread";
import { getAllUserThreads } from "../../utils/API/dbAPI";

class UserThreads extends React.Component {
  state = {
    userId: this.props.user ? this.props.user.id : null,
    Thread: []
  };

  componentDidMount = () => {
    this.loadThreads();
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      userId: newProps.user ? newProps.user.id : null
    });
  }

  loadThreads = () =>
    getAllUserThreads(this.props.user).then(res => {
      if (res.data[0].title) {
        this.setState({ Threads: res.data });
      } else {
        this.setState({ Threads: [] });
      }
    });

  render() {
    if (this.state.Threads) {
      return (
        <div>
          {this.state.Threads.map(thread =>
            UserThread({ thread: thread, username: this.props.user.username })
          )}
        </div>
      );
    } else {
      return <div className="noThread">
      <p>User hasn't created any threads yet!</p>
        </div>
    }
  }
}
export default UserThreads;
