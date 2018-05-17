import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Subforum = subForum => (
    <Link to={`/forum/${subForum.id}`}>
        <Card style={{marginTop:"7.5px",marginBottom:"7.5px"}}>
            <CardHeader
                avatar={
                <Avatar>
                    {subForum.category[0]}
                </Avatar>
                }
                title={subForum.updatedAt}
                subheader={`${subForum.threadCount} Threads`}
            />
            <CardContent>        
            <Typography variant="display1">{subForum.category}</Typography>

            </CardContent>
        </Card>
    </Link>
    );

export default Subforum;