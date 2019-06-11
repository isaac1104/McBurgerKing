import React, { Component } from 'react';
import { Drawer } from 'antd';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../actions';

class Sidebar extends Component {
  render() {
    const { sidebar_visible } = this.props.ui_visibility;
    return (
      <Drawer
        title='My Meal'
        placement='left'
        closable={false}
        onClose={this.props.toggleSidebar}
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