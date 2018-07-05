import React, { Component } from 'react';
import { BrowserRouter, Rout } from 'react-router-dom';
import { 
  Button,
  Icon,
  Divider,
 } from 'antd'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Json-Server-Demo powered by Ant-Design and React</h1>
        </header>
        <Divider/>
        <p className="App-intro">
          <Button.Group>
            <Button type="primary">
              <Icon type="left" />Backward
            </Button>
            <Button type="primary">
              Forward<Icon type="right" />
            </Button>
          </Button.Group>
        </p>
        <Divider/>
      </div>
    );
  }
}
export default App;
