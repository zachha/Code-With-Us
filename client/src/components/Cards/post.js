import React from "react";
import Avatar from "material-ui/Avatar";
import Card, {CardHeader,CardContent} from "material-ui/Card";
import Markdown from "react-markdown";
import CodeBlock from "../Markdown-plugins/code-block";

const Post = post => (
    <Card>
        <CardHeader
            avatar={
            <Avatar aria-label={post.User.username}>
                {post.User.username[0]}
            </Avatar>
            }
            title={post.title}
            subheader={post.User.username}
        />
        <CardContent>        
            <Markdown
                source={post.text} 
                renderers={{code:CodeBlock.Block,inlineCode:CodeBlock.InLine}}
            /> 
        </CardContent>
    </Card>
    );

export default Post;