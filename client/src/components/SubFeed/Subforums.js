import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { getAllSubForums} from "../../utils/API/dbAPI";
import Subforum from "../Cards/subForum";

class SubForums extends React.Component {

    state={
        subforums:[]
    }

    componentDidMount = () => this.loadSubForums();

     loadSubForums = () => {
        console.log(this.props);
        getAllSubForums()
        .then(res=>{
            console.log(res.data);
           this.setState(res.data);
        });
    }
    render () {return (
        <Paper elevation={3} className="left-feed">
           
            <Typography className="thread-title" variant="display1">Home Feed</Typography>
            {this.state.subforums.map(subforum => Subforum(subforum))}
        </Paper>
        );
    }
};
export default SubForums;
