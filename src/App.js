import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { 
  Button,
  Icon,
  Divider,
  Radio,
 } from 'antd'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: null,
    }
  }
  
  handleFetchUsers(){
    axios.get(`http://localhost:4000/users?_sort=firstName&_order=asc`)
      .then((res) => {
        this.setState({
          users: res.data,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleFetchSpecificUsers(wildcard){
    axios.get(`http://localhost:4000/users${wildcard}`)
      .then((res) => {
        this.setState({
          users: res.data,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Json-Server-Demo</h1>
            </header>
            <Divider/>
              <p className="App-intro">
                <Radio.Group>
                  <Link to={'/users'}>
                    <Button className='fetch-btn' size='large' 
                    onClick={() => this.handleFetchUsers()} type="primary">
                      <Icon type="team" />Show All In Alphabeitcal Order
                    </Button>
                  </Link>
                  <Link to={'/users'}>
                    <Button className='fetch-btn' size='large' 
                    onClick={() => this.handleFetchSpecificUsers('?cohortId=2')} type="primary">
                      <Icon type="smile-o" />Seniors
                    </Button>
                  </Link>
                  <Link to={'/users'}>
                    <Button className='fetch-btn' size='large' 
                    onClick={() => this.handleFetchSpecificUsers('?cohortId=1')} type="primary">
                      Juniors<Icon type="smile-o" />
                    </Button>
                  </Link>
                </Radio.Group>
              </p>
            <Divider/>
            <Switch>
              <Route exact path="/users" 
                render={(props) => <Users {...props} users={this.state.users}/>}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
