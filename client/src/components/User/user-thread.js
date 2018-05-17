import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const UserThread = props => (
    <div className="userThread">
        <Typography className="thread-title" variant="display1">
            {props.thread.Subforum.category}
        </Typography>
        <Link to={`/thread/${props.thread.id}`}>
            <Card>
                <CardHeader
                    avatar={<Avatar>{props.username[0]}</Avatar>}
                    title={props.username}
                    subheader={`${props.thread.postCount} Posts`}
                />
                <CardContent>
                    <Typography variant="display1">{props.thread.title}</Typography>
                </CardContent>
            </Card>
        </Link>
    </div>
);

export default UserThread;
