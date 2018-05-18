import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import User from './User/User';
import About from './About/About';
import Login from './Login/Login';
import Signup from './Signup/Signup';


export default class Main extends Component {
    render(){
        return <div className="content-main">
            <Switch>
              <Route exact path="/" render={() => <Home user={this.props.user} />} />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/login" render={() => <Login   loginCallback={this.handleLogin}
                                                                user={this.props.user} /> } />
              <Route exact path="/signup" render={() => <Signup />} />
              <Route exact path="/user" render={() => <User user={this.props.user} />} />
              <Route exact path="/user/:userId" render={({ match }) => <User user={this.props.user} userId={match.params.userId} />} />
              <Route exact path="/thread/:threadId" render={({ match }) => <Home user={this.props.user} threadId={match.params.threadId} />} />
              <Route exact path="/forum/:forumId" render={({ match }) => <Home user={this.props.user} forumId={match.params.forumId} />} />
            </Switch>
          </div>;
    }
};