import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './thread.css';

const Thread = thread => (
  <Card className="threadCard">
    <CardContent className="cardContent">
      <Avatar className="threadAvatar">{thread.User.username[0]}</Avatar>
        <Typography className="threadTitle" variant="display1">
            <Link to={`/thread/${thread.id}`}>
                {thread.title}
            </Link>
        </Typography>
      <div className="threadAuthorPostCount">
        Author: {thread.User.username}
        <br />
        {thread.postCount} Posts
      </div>
    </CardContent>
  </Card>
);

export default Thread;