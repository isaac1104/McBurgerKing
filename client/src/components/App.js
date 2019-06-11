import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchMenuData } from '../actions';

const Home = lazy(() => import('./Home/Home'));

class App extends Component {
  componentDidMount() {
    this.props.fetchMenuData();
  }
  
  render() {
    return (
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Suspense>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchMenuData })(App);