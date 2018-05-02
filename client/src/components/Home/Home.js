import React, { Component } from 'react';

import HomeFeed from './homeFeed';
import UserBox from './user-box';
export default class Home extends Component {
    render(){
        return (
            <React.Fragment>
                <HomeFeed />
                <UserBox />
            </React.Fragment>
        )
    }
};