import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import User from './User/User';
import About from './About/About';
import Login from './Login/Login';
import Signup from './Signup/Signup';


const Main = props => (
    <div className="content-main">
        <Switch>
            <Route  exact path="/"
                    render={() => <Home     user={props.user} />} />

            <Route  exact path="/about"
                    render={() => <About />} />

            <Route  exact path="/login"
                    render={() => <Login    loginCallback={props.handleLogin}
                                            user={props.user} /> } />

            <Route  exact path="/signup"
                    render={() => <Signup />} />

            <Route  exact path="/user"
                    render={() => <User     user={props.user} />} />

            <Route  exact path="/user/:userId"
                    render={({ match }) => <User    user={props.user}
                                                    userId={match.params.userId} />} />

            <Route  exact path="/thread/:threadId" 
                    render={({ match }) => <Home user={props.user} threadId={match.params.threadId} />} />

            <Route  exact path="/forum/:forumId" 
                    render={({ match }) => <Home user={props.user} forumId={match.params.forumId} />} />
        </Switch>
    </div>);

export default Main;