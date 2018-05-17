
import React from "react";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/Typography";
import Post from "../Cards/post";
import Reply from "./reply";
import UserInfo from '../Home/user-info';
import { getAllThreadPosts, deletePost} from "../../utils/API/dbAPI";


class Thread extends React.Component {
  
    state={
        userId:this.props.user ? this.props.user.id:null,
        threadId:this.props.threadId,
        Posts:[],
        expanded:false
    }

    componentDidMount = () => {
        console.log(this.props.user);
        this.loadPosts();
    }

    componentWillReceiveProps (newProps){
        this.setState({
            userId: newProps.user ?newProps.user.id:null
        });
    }
    
    loadPosts = () => 
      getAllThreadPosts(this.props.threadId)
      .then(res=>{
          res.data.Posts.sort((a,b)=> a.id>b.id?1:-1); 
          //console.log(res.data);     
          this.setState(res.data);
          //console.log(this.state,"STATE");
      });

    handleEdit = event => {
        event.preventDefault();
        //console.log(this.state.Posts);
        this.setState({
            toEdit:this.state.Posts.find(post => post.id===parseInt(event.target.id)),
            expanded:true
        },console.log(this.state.expanded))
    }
    
    handleDelete = event => {
       event.preventDefault();
       deletePost(event.target.id)
       .then(() => window.location.reload());

    }

    expandToggle = () => this.setState({expanded:!this.state.expanded});
    render() {
        return (
            <Paper elevation={3} className="home-feed">
                <Typography className="thread-title" variant="display1">{this.state.title}</Typography>
                <UserInfo style={{float:"right"}} user={this.props.user} userId={this.state.userId} />
                {this.state.Posts.map(post => <Post post={post} 
                                                     userId={this.state.userId}
                                                     editCallback={this.handleEdit}
                                                     deleteCallback={this.handleDelete} />).sort()}
                {this.state.userId && <ExpansionPanel expanded={this.state.expanded}>
                    <ExpansionPanelSummary
                    onClick={this.expandToggle}
                    expandIcon={<ExpandMoreIcon/>}> 
                    <Typography>Reply</Typography>                       
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{padding:0}} >
                        <Reply toEdit={this.state.toEdit} threadId={this.state.threadId} userId={this.state.userId}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>}
            </Paper>
            
        );

    }
}
export default Thread;