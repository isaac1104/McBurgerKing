import React, { Component } from 'react';
import { Drawer } from 'antd';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../actions';

class Sidebar extends Component {
  componentDidMount() {
    console.log('sidebar mounted')
  }
  
  render() {
    const { ui_visibility: { sidebar_visible }, toggleSidebar } = this.props;
    return (
      <Drawer
        title='My Meal'
        placement='left'
        closable={false}
        onClose={toggleSidebar}
        visible={sidebar_visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    );
  }
}

const mapStateToProps = ({ ui_visibility }) => {
  return {
    ui_visibility
  };
};

export default connect(mapStateToProps, { toggleSidebar })(Sidebar);