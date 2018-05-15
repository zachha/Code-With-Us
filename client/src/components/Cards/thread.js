import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Thread = thread => (
    <Link to={`/thread/${thread.id}`}>
        <Card>
            <CardHeader
                avatar={
                <Avatar>
                    {thread.User.username[0]}
                </Avatar>
                }
                title={thread.User.username}
                subheader={`${thread.postCount} Posts`}
            />
            <CardContent>        
            <Typography variant="display1">{thread.title}</Typography>

            </CardContent>
        </Card>
    </Link>
    );

export default Thread;