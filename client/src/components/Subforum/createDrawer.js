import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Markdown from "react-markdown";
import CodeBlock from "../Markdown-plugins/code-block";
import Button from "@material-ui/core/Button";
import {createThread,createPost} from '../../utils/API/dbAPI';

class CreateThread extends React.Component {
    
    state={
        text:"",
        title:"",
        userId:this.props.userId,
        open:this.props.drawer,
        subforumId:this.props.subforumId
    }
    
    componentWillReceiveProps (newProps){
        this.setState({
            open:newProps.drawer,
            userId:newProps.userId,
            subforumId:newProps.subforumId},
            console.log(this.state));
    }
    
    handleSave = event => {
        event.preventDefault();
        let newThread={
            title:this.state.title,
            subforumId:this.state.subforumId
        }
        createThread(newThread)
        .then(res =>{
            this.setState({threadId:res.data.id})
            let newPost={
                threadId:res.data.id,
                text:this.state.text
            }
          createPost(newPost)
          .then(()=>window.location.href="/thread/"+this.state.threadId);
        })
    }

    titleInput = event => {
        this.setState({title:event.target.value});
    }
    inputHandler = event => {
        this.setState({ text: event.target.value });     
      }

    render() {return(
    <Drawer anchor="bottom" open={this.state.open} onClose={this.props.toggleDrawer}>
    <div
        tabIndex={0}
        role="button"
        onClick={this.toggleDrawer}
        onKeyDown={this.toggleDrawer}
    >
<Paper style={{padding:"15px"}}>
<form className="reply-form" onSubmit={this.handleSave}>   
    <Card className="reply-card">
        <CardHeader 
            style={{borderBottom:"0px solid #ccc"}}
            className="post-submit"
            avatar={
            <Avatar aria-label="Code With Us">
                T
            </Avatar>  
            }
            title={
            <span>
              <Button type="submit"  variant="raised" color="primary" >
                Create Thread!
              </Button>
              <TextField
                label="Title"
                value={this.state.title}
                style={{float:"left",width:"55%",marginTop:"20px"}}
                onChange={this.titleInput} 
               />   
              </span>
            }
            subheader="May 2, 2018"
        />
        <CardContent >    
            <div style={{textAlign:"center"}}><TextField
                textAlign="center"
                multiline
                label="First Post"
                value={this.state.text}
                style={{width:"91%"}}
                onChange={this.inputHandler}
            /></div>      
            <Markdown
                source={this.state.text} 
                renderers={{code:CodeBlock.Block,inlineCode:CodeBlock.InLine}}
            /> 
        </CardContent>
    </Card>

    </form>
    </Paper>
    </div>
    </Drawer>
);}

}

export default CreateThread;