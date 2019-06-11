import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { fetchMenuData } from '../actions';

const Home = lazy(() => import('./Home/Home'));

class App extends Component {
  componentDidMount() {
    this.props.fetchMenuData();
  }

  renderHomeComponent() {
    const { is_fetching } = this.props.menu;
    if (is_fetching) {
      return <h1>Fetching Menu Data</h1>
    }
    return (
      <Suspense fallback={<div>Loading App..</div>}>
        <Home />
      </Suspense>
    )
  }
  
  render() {
    return (
      <>
        {this.renderHomeComponent()}
      </>
    );
  }
}

const mapStateToProps = ({ menu }) => {
  return {
    menu
  };
};

export default connect(mapStateToProps, { fetchMenuData })(App);