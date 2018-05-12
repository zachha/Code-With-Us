import React from "react";
import Avatar from "material-ui/Avatar";
import Card, {CardHeader,CardContent} from "material-ui/Card";
import Markdown from "react-markdown";
import CodeBlock from "../Markdown-plugins/code-block";
import IconButton from 'material-ui/IconButton';
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
                <IconButton type="submit" ><EditIcon /></IconButton> 
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