import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Markdown from "react-markdown";
import CodeBlock from "../Markdown-plugins/code-block";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const titleRight = {
    display:"flex"
}

class Post extends React.Component{
 
    state = {
        open:false
    }

    alertToggle = () => this.setState({open: !this.state.open});


   render () {return (

    <Card>
        <CardHeader
            
            avatar={
            <Avatar aria-label={this.props.post.User.username}>
                {this.props.post.User.username[0]}
            </Avatar>
            }
            title={this.props.post.User.username}
            action={
                this.props.post.UserId===this.props.userId &&
                <span>
                  <span>
                    <IconButton id={this.props.post.id} onClick={this.alertToggle}><DeleteIcon /></IconButton> 
                    <Dialog
                    open={this.state.open}
                    onClose={this.alertToggle}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this post?"}</DialogTitle>
                    <DialogActions>
                        <Button id={this.props.post.id} onClick={this.props.deleteCallback} color="primary">
                        Delete
                        </Button>
                        <Button onClick={this.alertToggle} color="primary" autoFocus>
                        Cancel
                        </Button>
                    </DialogActions>
                    </Dialog>
                  </span>
                <IconButton id={this.props.post.id} onClick={this.props.editCallback}><EditIcon /></IconButton> 
                </span>
            }
        />
        <CardContent>        
            <Markdown
                source={this.props.post.text} 
                renderers={{code:CodeBlock.Block,inlineCode:CodeBlock.InLine}}
            /> 
        </CardContent>
    </Card>
    );}
}

export default Post;