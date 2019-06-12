import React, { Component } from 'react';
import { Drawer, Icon, Typography, message } from 'antd';
import { connect } from 'react-redux';
import { removeItemFromCart, toggleSidebar } from '../../actions';
import styles from './Sidebar.module.css';

class Sidebar extends Component {
  renderCartItems() {
    const { data } = this.props.cart_items;
    return data.map(({ name, price, img }) => (
      <div key={name} className={styles.CartItemRow}>
        <div className={styles.CartItemRowLeft}>
          <Icon
            type='delete'
            className={styles.DeleteIcon}
            onClick={async () => {
              await this.props.removeItemFromCart(name);
              message.error(`Removed ${name} from the cart`);
            }}
          />
          <Typography>{name}</Typography>
        </div>
        <div className={styles.CartItemRowRight}>
          <Typography>${price}</Typography>
          <Typography>x 1</Typography>
        </div>
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
        width={350}
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

export default connect(mapStateToProps, { removeItemFromCart, toggleSidebar })(Sidebar);