import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';

export default class Main extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" render={() => (<Home />)}/>
            </Switch>
        )
    }
};