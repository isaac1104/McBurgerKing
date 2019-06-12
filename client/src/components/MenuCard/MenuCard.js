import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { fetchMenuData } from '../../actions';
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
        hoverable
        className={styles.MenuCard}
        cover={<img alt={name} src={img} className={styles.MenuImage} />}
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

export default connect(null, { fetchMenuData })(MenuCard);