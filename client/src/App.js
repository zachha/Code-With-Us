import React, { Component } from 'react';

import { setAuth, defaultLogin, logout} from './utils/API/dbAPI';

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
        username: null,
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
    setAuth();
    defaultLogin()
      .then(res => this.handleLogin(res));
  };

  handleLogin = user => {
    this.setState({
      user: {
        ...this.state.user,
        isLoggedIn: true,
        username: user.username,
        joinDate: user.createdAt,
        lastUpdated: user.updatedAt,
        id: user.id,
        isModerator: user.isModerator,
        picture: user.picture,
        postCount: user.postCount,
        reports: user.reports,
        reputation: user.reputation
      }
    });

    setAuth();
  };

  handleLogout = () => {
    this.setState({
      user: {
        ...this.state.user,
        isLoggedIn: false,
        username: null,
        joinDate: null,
        lastUpdated: null,
        id: null,
        isModerator: null,
        picture: null,
        postCount: null,
        reports: null,
        reputation: null
      }
    });

    logout();
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
          handleLogout={this.handleLogout}
          user={this.state.user}/>
        <Main 
          user={this.state.user}
          handleLogin={this.handleLogin} />
      </div>
    );
  };

};

export default App;