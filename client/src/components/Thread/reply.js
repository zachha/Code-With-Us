import React from "react";
import Avatar from "material-ui/Avatar";
import Card, {CardHeader,CardContent} from "material-ui/Card";
import TextField from 'material-ui/TextField';
import Markdown from "react-markdown";
import CodeBlock from "../Markdown-plugins/code-block";
import Button from "material-ui/Button";
import { createPost, editPost} from "../../utils/API/dbAPI";


class Reply extends React.Component {
    state = {
        UserId:this.props.userId,
        threadId:this.props.threadId,
        text : ""
    }
   componentWillReceiveProps (newProps) {
      newProps.toEdit && this.setState(newProps.toEdit,console.log(this.state));
   }

    inputHandler = event => {
      this.setState({ text: event.target.value });
      console.log(this.state.text);      
    }

    formSubmit = event => {
        event.preventDefault();
        this.state.id?
        editPost(this.state)
        .then(() => window.location.reload())
        :createPost(this.state)
        .then(() => window.location.reload());
    }
    
    render () {return(
    <form className="reply-form" onSubmit={this.formSubmit}>   
    <Card className="reply-card">
        <CardHeader className="post-submit"
            avatar={
            <Avatar aria-label="Code With Us">
                C
            </Avatar>
            }
            title={
                <Button type="submit"  variant="raised" color="primary" >
                Post
              </Button>
            }
            subheader="May 2, 2018"
        />
        <CardContent>            
            <TextField
                multiline
                value={this.state.text}
                fullWidth={true}
                onChange={this.inputHandler}
            />       
            <Markdown
                source={this.state.text} 
                renderers={{code:CodeBlock.Block,inlineCode:CodeBlock.InLine}}
            /> 
        </CardContent>
    </Card>
    </form>
    );}
  }
export default Reply;