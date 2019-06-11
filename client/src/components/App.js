import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { fetchMenusData } from '../actions';
import Loader from './Loader/Loader';
import Sidebar from './Sidebar/Sidebar';
import MenuModal from './MenuModal/MenuModal';

const Home = lazy(() => import('./Home/Home'));

class App extends Component {
  componentDidMount() {
    this.props.fetchMenusData();
  }

  renderHomeComponent() {
    const { is_fetching } = this.props.menus;
    if (is_fetching) {
      return <Loader msg='Fetching Menu Data' />;
    }
    return (
      <Suspense fallback={<Loader msg='Loading App' />}>
        <Home />
      </Suspense>
    )
  }

  renderSidebar() {
    const { data } = this.props.menus;
    if (data) {
      return <Sidebar />;
    }
    return null;
  }

  renderMenuModal() {
    const { data } = this.props.menus;
    if (data) {
      return <MenuModal />;
    }
    return null;
  }

  render() {
    return (
      <>
        {this.renderSidebar()}
        {this.renderMenuModal()}
        {this.renderHomeComponent()}
      </>
    );
  }
}

const mapStateToProps = ({ menus }) => {
  return {
    menus
  };
};

export default connect(mapStateToProps, { fetchMenusData })(App);