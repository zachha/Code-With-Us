import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';

import Main from './components/main';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      menuDrawer: {
        isOpen: false
      }
    }
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
          onCloseDrawer={this.closeMenuDrawer}/>
        <Main />
      </div>
    );
  }
}

export default App;
