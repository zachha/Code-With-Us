import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Thread from './Thread/Thread';
import Subforum from './Subforum/Subforum';

export default class Main extends Component {

    state={
        userId:1
    }

    render(){
        return (
            <div className="content-main">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/thread/:threadId" render={({match}) => <Thread userId={this.state.userId} threadId={match.params.threadId}/>}/>
                    <Route exact path="/forum/:forumId" render={({match}) => <Subforum forumId={match.params.forumId}/>}/>
                </Switch>
            </div>
        )
    }
};