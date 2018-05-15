import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Markdown from "react-markdown";
import CodeBlock from "../Markdown-plugins/code-block";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
const titleRight = {
    display:"flex"
}

const Post = props => (
    <Card>
        <CardHeader
            
            avatar={
            <Avatar aria-label={props.post.User.username}>
                {props.post.User.username[0]}
            </Avatar>
            }
            title={props.post.User.username}
            action={
                props.post.UserId===props.userId &&
                <IconButton id={props.post.id} onClick={props.editCallback}><EditIcon /></IconButton> 
            }
        />
        <CardContent>        
            <Markdown
                source={props.post.text} 
                renderers={{code:CodeBlock.Block,inlineCode:CodeBlock.InLine}}
            /> 
        </CardContent>
    </Card>
    );

export default Post;