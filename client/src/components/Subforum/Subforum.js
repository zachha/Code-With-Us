import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { getAllSubforumThreads} from "../../utils/API/dbAPI";
import Button from "@material-ui/core/Button";
import CreateThread from './createDrawer';
import Thread from "../Cards/thread";

const floatRight = {
    float:"right"
  }

class Subforum extends React.Component {

    state={
        SubforumId:this.props.forumId,
        Threads:[],
        drawer:false
    }

    componentDidMount = () => this.loadThreads();

    loadThreads = () => 
        getAllSubforumThreads(this.state.SubforumId)
        .then(res=>
           this.setState(res.data)
        );
    
    toggleDrawer = () => this.setState({drawer:!this.state.drawer});


    render () {return (
        <Paper elevation={3} className="left-feed">
           
            <Typography className="thread-title" variant="display1">{this.state.category}<Button onClick={this.toggleDrawer}style={floatRight} color="primary">Create Thread</Button></Typography>
            {this.state.Threads.map(thread => Thread(thread))}
            <CreateThread
                subforumId={this.state.SubforumId}
                toggleDrawer={this.toggleDrawer}
                userId={this.state.userId}
                drawer={this.state.drawer}
            />
        </Paper>
        );
    }
}
export default Subforum;
