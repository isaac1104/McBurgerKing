import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Card, message } from 'antd';
import { addItemsToCart } from '../../actions';
import styles from './MenuCard.module.css';

const { Meta } = Card;

class MenuCard extends Component {
  capitalizeFirstLetter(string) {
    return `${string.split('')[0].toUpperCase()}${string.slice(1)}`;
  }

  render() {
    const { name, price, img } = this.props;
    return (
      <Card
        className={styles.MenuCard}
        cover={<img alt={name} src={img} className={styles.MenuImage} />}
        actions={
          [
            <Button
              shape='round'
              icon='shopping-cart'
              className={styles.AddToCartButton}
              onClick={async () => {
                await this.props.addItemsToCart({ name, price, img, quantity: 1 });
                message.success(`${name} successfully added to the cart!`);
              }}
            >
              Add To Cart
            </Button>
          ]
        }
      >
        <Meta title={name} description={`$${price}`} />
      </Card>
    );
  }
}

MenuCard.propTypes = {
  menu: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
};

export default connect(null, { addItemsToCart })(MenuCard);