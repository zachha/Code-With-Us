import React, { Component } from 'react';

import HomeFeed from './homeFeed';
import UserBox from './user-box';
export default class Home extends Component {
    state={
        user:{
            username:"Harris",
            id:1
        }
    }
    render(){

        return (
            <React.Fragment>
                <HomeFeed props={{...this.props,userId:this.state.user.id}}/>
                <UserBox username={this.state.user.username}/>
            </React.Fragment>
        )
    }
};