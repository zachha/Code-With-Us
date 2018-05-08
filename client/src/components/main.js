import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';

export default class Main extends Component {

    render(){
        return (
            <div className="content-main">
                <Switch>
                    <Route exact path="/" render={() => <Home />}/>
                    <Route exact path="/about" render={() => <About />}/>
                    <Route exact path="/thread/:threadId" render={({match}) => <Home threadId={match.params.threadId}/>}/>
                    <Route exact path="/forum/:forumId" render={({match}) => <Home forumId={match.params.forumId}/>}/>
                </Switch>
            </div>
        )
    }
};