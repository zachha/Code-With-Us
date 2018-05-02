import React from "react";
import Paper from "material-ui/Paper";
import Typography from 'material-ui/Typography';
import Post from "./post";
import Reply from "./reply";

class Thread extends React.Component{
    state={
        posts:[
            {user:"Harris",
            title:"A Post",
             markdown:`
             ## How about some code?
             \`\`\`js
             var React = require('react');
             var Markdown = require('react-markdown');
             React.render(
               <Markdown source="# Your markdown here" />,
               document.getElementById('content')
             );
             \`\`\`
             `
            }

        ]
    }
    render(){
        return (
            <Paper elevation={3} className="thread-main">
                <Typography variant="title">A Thread</Typography>
                {this.state.posts.map(post => Post(post))}
                <Reply />
            </Paper>        
        );

    }
}
export default Thread;