import React, { Component } from 'react';

import HomeFeed from './homeFeed';
import UserInfo from './user-info';
export default class Home extends Component {
    state = {
        user:this.props.user
    }

    componentWillReceiveProps (newProps) {
        this.setState({user:newProps.user});
    }

    render(){
 
        return (
            <React.Fragment>
                <HomeFeed props={{...this.props,user:this.props.user}}/>
                <UserInfo user={this.props.user}/>
            </React.Fragment>
        )
    }
};