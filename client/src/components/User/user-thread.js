import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './css/user-thread.css';

const UserThread = props => (
    <div className="userThread">
        <Typography className="thread-title" variant="display1">
                {props.thread.Subforum.category}
        </Typography>
        
            <Card>
                <div className="postContent">
                    <CardContent className="cardContent">
                        <Avatar>{props.username[0]}</Avatar>
                        <Typography variant="display1">
                            <Link to={`/thread/${props.thread.id}`}>
                                {props.thread.title}
                            </Link>
                        </Typography>
                    <div className="threadAuthorPostCount">
                        Author: {props.username}
                        <br />
                        {props.thread.postCount} Posts
                    </div>
                    </CardContent>
                </div>
            </Card>
    </div>
);

export default UserThread;
