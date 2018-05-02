import React from "react";
import Avatar from "material-ui/Avatar";
import Card, {CardHeader,CardContent} from "material-ui/Card";
import TextField from 'material-ui/TextField';
import Markdown from "react-markdown";
import CodeBlock from "./code-block";

class Reply extends React.Component {
    constructor(props){
        super(props);
        this.formSubmit.bind(this);
    }

    state = {
        input : ""
    } 

    inputHandler = event => {
      this.setState({ input: event.target.value });
      
    }
    formSubmit = event => {
      this.posts.append({name:"Harris",title:"Another Post",markdown:this.input});
    }
    render () {return(
      
    <Card>
        <CardHeader
            avatar={
            <Avatar aria-label="Code With Us">
                C
            </Avatar>
            }
            title="Contribute to Thread"
            subheader="May 2, 2018"
        />
        <CardContent> 

          <form>    
            <TextField
                multiline
                hintText="Full width"
                fullWidth={true}
                onChange={this.inputHandler}
            />
          </form>
          
            <Markdown
                source={this.state.input} 
                renderers={{code:CodeBlock.Block,inlineCode:CodeBlock.InLine}}
            /> 
        </CardContent>
    </Card>
    );}
  }
export default Reply;