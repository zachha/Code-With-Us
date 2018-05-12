import React from "react";
import Paper from "material-ui/Paper";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from 'material-ui/Typography';
import Post from "../Cards/post";
import Reply from "./reply";
import { getAllThreadPosts} from "../../utils/API/dbAPI";

class Thread extends React.Component {
  
    state={
        UserId:this.props.userId,
        threadId:this.props.threadId,
        Posts:[]
    }

    componentDidMount = () => this.loadPosts();
    
    
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
                {this.state.Posts.map(post => Post({post:post,userId:this.state.UserId}))}
                <ExpansionPanel>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon />}> 
                    <Typography>Reply</Typography>                       
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Reply threadId={this.props.threadId} userId={this.props.userId}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
        );

    }
}
export default Thread;