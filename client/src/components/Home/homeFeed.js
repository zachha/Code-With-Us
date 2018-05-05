import React from 'react';
import Subforum from '../Subforum/Subforum';
import Thread from '../Thread/Thread';
import SubForums from '../SubFeed/Subforums';

const HomeFeed = (props) =>{console.log(props); return props.props.threadId ?
     <Thread userId={props.userId} threadId={props.props.threadId}/>: 
     props.props.forumId ? 
     <Subforum forumId={props.props.forumId}/> : 
     <SubForums />
}

export default HomeFeed;
