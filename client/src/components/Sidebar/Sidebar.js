import React, { Component } from 'react';
import { Drawer } from 'antd';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../actions';

class Sidebar extends Component {
  render() {
    console.log(this.props.cart_items);
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

const mapStateToProps = ({ cart_items, ui_visibility }) => {
  return {
    cart_items,
    ui_visibility
  };
};

export default connect(mapStateToProps, { toggleSidebar })(Sidebar);