import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Markdown from "react-markdown";
import CodeBlock from "../Markdown-plugins/code-block";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const Post = props => (

    <div className="userPost">
        <Typography className="thread-title" variant="display1">
            {props.post.Thread.title}
        </Typography>
        <Card>
            <CardHeader
            avatar={
                <Avatar aria-label={props.username}>
                    {props.username[0]}
                </Avatar>
            }
            title={props.username}
            />
            <CardContent>        
                <Markdown
                    source={props.post.text} 
                    renderers={{code:CodeBlock.Block,inlineCode:CodeBlock.InLine}}
                /> 
            </CardContent>
        </Card>
    </div>
    );

export default Post;