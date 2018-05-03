import React from "react";
import Paper from "material-ui/Paper";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from 'material-ui/Typography';
import Post from "../Post/post";
import Reply from "../Reply/reply";

class Thread extends React.Component {
    state = {
        totalPosts:1,
        posts: [
            {
                id:1,
                user: "Harris",
                title: "A Post",
                markdown: `
             ## How about some code? 
             \`\`\` 
             var React = require('react'); 
             var Markdown = require('react-markdown'); 
             React.render( \
               <Markdown source="# Your markdown here" />, 
               document.getElementById('content') 
             ); 
             \`\`\` 
             `
            }

        ]
    }
    newPost = input => {     
        console.log(this.state.posts);
        this.setState({totalPosts:this.totalPosts+=1});
        this.setState(old => ({
            posts:[...old.posts,{
            id:this.state.totalPosts,
            user:"Harris",
            title:"Another Post",
            markdown:input
            }]
        }));
      }
    render() {
        return (
            <Paper elevation={3} className="thread-main">
               
                        <Typography variant="title">A Thread</Typography>
                        {this.state.posts.map(post => Post(post))}
                        <ExpansionPanel>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon />}> 
                    <Typography>Reply</Typography>                       
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Reply action={this.newPost} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
        );

    }
}
export default Thread;