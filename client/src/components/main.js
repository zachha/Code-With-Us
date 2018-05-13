import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {setAuth,defaultLogin} from '../utils/API/dbAPI';
import Home from './Home/Home';
import About from './About/About';
import Login from './Login/Login';
import Signup from './Signup/Signup';


export default class Main extends Component {
    state = {
        user:null
    }

    componentDidMount () {
        setAuth();
        defaultLogin()
        .then(res => this.setState({user:res}));
    }

    handleLogin = user => {
        this.setState({user:user},()=>console.log(this.state));
        setAuth();
    }

    render(){
        return (
            <div className="content-main">
                <Switch>
                    <Route exact path="/" render={() => <Home user={this.state.user}/>}/>
                    <Route exact path="/about" render={() => <About />}/>
                    <Route exact path="/login" render={() => <Login loginCallback={this.handleLogin}/>}/>
                    <Route exact path="/signup" render={() => <Signup />}/>
                    <Route exact path="/thread/:threadId" render={({match}) => <Home user={this.state.user} threadId={match.params.threadId}/>}/>
                    <Route exact path="/forum/:forumId" render={({match}) => <Home user={this.state.user} forumId={match.params.forumId}/>}/>
                </Switch>
            </div>
        )
    }
};