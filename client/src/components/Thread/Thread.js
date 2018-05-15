import React from "react";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core/ExpansionPanel";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import Post from "../Cards/post";
import Reply from "./reply";
import { getAllThreadPosts} from "../../utils/API/dbAPI";

class Thread extends React.Component {
  
    state={
        userId:this.props.user ? this.props.user.id:null,
        threadId:this.props.threadId,
        Posts:[]
    }

    componentDidMount = () => {
        console.log(this.props.user);
        this.loadPosts();
    }

    componentWillReceiveProps (newProps){
        console.log(newProps);
        this.setState({
            userId: newProps.user ? newProps.user.id:null
        });
    }
    
    loadPosts = () => 
      getAllThreadPosts(this.props.threadId)
      .then(res=>{         
          this.setState(res.data);
          console.log(this.state,"STATE");
      });

    render() {
        return (
            <Paper elevation={3} className="left-feed">
               
                <Typography className="thread-title" variant="display1">{this.state.title}</Typography>
                {this.state.Posts.map(post => Post({post:post,userId:this.state.userId}))}
                {this.state.userId && <ExpansionPanel>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon />}> 
                    <Typography>Reply</Typography>                       
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Reply threadId={this.state.threadId} userId={this.state.userId}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>}
            </Paper>
        );

    }
}
export default Thread;