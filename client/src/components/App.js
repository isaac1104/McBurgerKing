import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchMenuData } from '../actions';
import Home from './Home/Home';

class App extends Component {
  componentDidMount() {
    this.props.fetchMenuData();
  }
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchMenuData })(App);