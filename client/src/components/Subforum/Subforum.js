import React from "react";
import Paper from "material-ui/Paper";
import Typography from 'material-ui/Typography';
import { getAllSubforumThreads} from "../../utils/API/dbAPI";
import Thread from "../Cards/thread";

class Subforum extends React.Component {

    state={
        SubforumId:this.props.forumId,
        Threads:[]
    }

    componentDidMount = () => this.loadThreads();

    loadThreads = () => 
        getAllSubforumThreads(this.state.SubforumId)
        .then(res=>
           this.setState(res.data)
        );

    render () {return (
        <Paper elevation={3} className="thread-main">
           
            <Typography className="thread-title" variant="display1">{this.state.category}</Typography>
            {this.state.Threads.map(thread => Thread(thread))}
        </Paper>
        );
    }
}
export default Subforum;
