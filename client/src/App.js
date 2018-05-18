import React, { Component } from 'react';

import {setAuth,defaultLogin} from './utils/API/dbAPI';

import Header from './components/Header/Header';
import Main from './components/main';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      menuDrawer: {
        isOpen: false
      },

      user: {
        isLoggedIn: false,
        userName: null,
        joinDate: null,
        lastUpdated: null,
        id: null,
        isModerator: false,
        picture: null,
        postCount: null,
        reports: null,
        reputation: null,
      }
    }
  };

  componentDidMount () {
    console.log("mounted");
    setAuth();
    defaultLogin()
    .then(res => this.setState({user:res}));
  };

  handleLogin = user => {
      this.setState( { user : user });
      setAuth();
  };

  openMenuDrawer = (e) => {
    this.setState({
      menuDrawer : {
        ...this.state.menuDrawer, isOpen: true
      }
    });
  };

  closeMenuDrawer = (e) => {
    this.setState({
      menuDrawer : {
        ...this.state.menuDrawer, isOpen: false
      }
    });
  };

  render() {
    return (
      <div className="app">
        <Header 
          isMenuOpen={this.state.menuDrawer.isOpen}
          onOpenDrawer={this.openMenuDrawer}
          onCloseDrawer={this.closeMenuDrawer}
          user={this.state.user}/>
        <Main user={this.state.user}/>
      </div>
    );
  };

};

export default App;