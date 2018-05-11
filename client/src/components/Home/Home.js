import React, { Component } from 'react';

import HomeFeed from './homeFeed';
import UserBox from './user-box';
export default class Home extends Component {
    state={
        user:{
            username:"Harris",
            id:"1",
            reputation: 12,
            postCount: 53,
            picture: ""
        }
    }
    render(){

        return (
            <React.Fragment>
                <HomeFeed props={{...this.props,userId:this.state.user.id}}/>
                <UserBox 
                username={this.state.user.username} 
                reputation={this.state.user.reputation}
                postCount={this.state.user.postCount}
                picture={this.state.user.picture}
                />
            </React.Fragment>
        )
    }
};