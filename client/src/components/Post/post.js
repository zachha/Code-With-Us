import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card, { CardHeader, CardContent } from "@material-ui/core/Card";
import Markdown from "react-markdown";
import CodeBlock from "../Code-Block/code-block";

const Post = post => (
      
    <Card>
        <CardHeader
            avatar={
            <Avatar aria-label={post.user}>
                {post.user[0]}
            </Avatar>
            }
            title={post.title}
            subheader={post.user}
        />
        <CardContent>        
            <Markdown
                source={post.markdown} 
                renderers={{code:CodeBlock.Block,inlineCode:CodeBlock.InLine}}
            /> 
        </CardContent>
    </Card>
    );

export default Post;