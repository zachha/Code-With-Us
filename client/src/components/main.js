import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Thread from './Thread/thread';

export default class Main extends Component {
    render(){
        return (
            <div className="content-main">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/thread" component={Thread}/>
                </Switch>
            </div>
        )
    }
};