import React from 'react';
import Subforum from '../Subforum/Subforum';
import Thread from '../Thread/Thread';
import SubForums from '../SubFeed/Subforums';

//HomeFeed returns the result of a ternary chain switch
const HomeFeed = (props) => props.props.threadId ?//if threadId not null
     <Thread user={props.props.user} threadId={props.props.threadId}/> : //else
     props.props.forumId ? //if forumId not null
     <Subforum user={props.props.user} forumId={props.props.forumId}/> : //else
     <SubForums />;

export default HomeFeed;
