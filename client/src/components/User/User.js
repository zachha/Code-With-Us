import react from 'react';
import { Link } from "react-router-dom";
import UserBox from './user-box.js';
import UserPosts from './user-posts.js';
import UserThreads from './user-threads.js';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import './user.css';

const styles = {
  root: {
    flexGrow: 1
  }
};

// Containers divs for the different tabs
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};
class User extends Component {
    state = {
        user: this.props.user,
        userId: this.props.userId,
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render(){
        const { value } = this.state;
        return <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className="userContent">
                <AppBar position="static">
                  <Tabs value={value} onChange={this.handleChange} centered>
                    <Tab label="User Overview" />
                    <Tab label="Threads Created" />
                    <Tab label="All Posts" href="#basic-tabs" />
                  </Tabs>
                </AppBar>
                {/* defines the different values for the tabs */}
                {value === 0 && 
                <TabContainer>
                    {/* renders the user's overview */}
                    <UserBox user={this.state.user} />
                </TabContainer>}

                {value === 1 && 
                <TabContainer>
                    {/* renders all of the user's threads and shows the title of the subforum they were in */}
                    <UserThreads user={this.state.user} />
                </TabContainer>}

                {value === 2 && 
                <TabContainer>
                    {/* renders all of the user's posts and shows the title of the thread they were in */}
                    <UserPosts user={this.state.user} />
                </TabContainer>}
              </Paper>
            </Grid>
          </Grid>;
    }
};

export default withStyles(styles)(User);
