import React, { Component } from 'react';
import { Drawer, Typography } from 'antd';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../actions';

class Sidebar extends Component {
  renderCartItems() {
    const { data } = this.props.cart_items;
    return data.map(({ name, price, img }) => (
      <div key={name}>
        <Typography>{name}</Typography>
      </div>
    ));
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
        {this.renderCartItems()}
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