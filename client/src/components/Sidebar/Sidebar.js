import React, { Component } from 'react';
import { Drawer, Icon, Typography, message } from 'antd';
import { connect } from 'react-redux';
import { removeItemFromCart, toggleSidebar } from '../../actions';
import styles from './Sidebar.module.css';

const { Title } = Typography;

class Sidebar extends Component {
  state = {
    width: null
  };

  updateWindowWidth = () => {
    const { innerWidth } = window;
    if (innerWidth <= 425) {
      return this.setState({ width: innerWidth * 0.8 });
    }
    if (innerWidth <= 768) {
      return this.setState({ width: innerWidth * 0.6 });
    }
    if (innerWidth <= 1024) {
      return this.setState({ width: innerWidth * 0.5 });
    }
    if (innerWidth <= 1440) {
      return this.setState({ width: innerWidth * 0.4 });
    }
    return this.setState({ width: innerWidth * 0.3 });
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  renderCartItems() {
    const { data } = this.props.cart_items;
    return data.map(({ name, price, img, quantity }) => (
      <div key={name} className={styles.CartItemRow}>
        <div className={styles.CartItemRowLeft}>
          <Icon
            type='delete'
            theme='filled'
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
          <Typography>x {quantity}</Typography>
        </div>
      </div>
    ));
  }

  renderTotalPrice() {
    const { data } = this.props.cart_items;
    return (
      <div className={styles.CartItemTotalContainer}>
        <div className={styles.CartItemTotal}>
          <Title level={3}>TOTAL: </Title>
          <Title code level={3}>${this.calculateTotalPrice(data)}</Title>
        </div>
      </div>
    )
  }

  calculateTotalPrice(data) {
    return data.reduce((acc, curr) => curr.price * curr.quantity + acc, 0).toFixed(2);
  }

  render() {
    const { ui_visibility: { sidebar_visible }, toggleSidebar } = this.props;
    return (
      <Drawer
        title='MY MEAL'
        placement='left'
        width={this.state.width}
        onClose={toggleSidebar}
        visible={sidebar_visible}
      >
        {this.renderCartItems()}
        {this.renderTotalPrice()}
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