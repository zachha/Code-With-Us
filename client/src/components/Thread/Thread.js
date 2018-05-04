import React from "react";
import Paper from "material-ui/Paper";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from 'material-ui/Typography';
import Post from "./post";
import Reply from "./reply";
import { getAllThreadPosts} from "../../utils/API/dbAPI";

class Thread extends React.Component {
  
    state={
        posts:[]
    }

    componentDidMount = () => {
        this.loadPosts();
      }
    
    
    loadPosts = () => 
      getAllThreadPosts(1)
      .then(res=>{
          console.log(res);
          this.setState({posts:res})
      });

    render() {
        return (
            <Paper elevation={3} className="thread-main">
               
                        <Typography className="thread-title" variant="display1">A Thread</Typography>
                        {this.state.posts.map(post => Post(post))}
                        <ExpansionPanel>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon />}> 
                    <Typography>Reply</Typography>                       
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Reply threadId={1} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
        );

    }
}
export default Thread;