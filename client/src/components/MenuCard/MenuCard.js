import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { fetchMenuData, toggleModal } from '../../actions';
import styles from './MenuCard.module.css';

const { Meta } = Card;

class MenuCard extends Component {
  capitalizeFirstLetter(string) {
    return `${string.split('')[0].toUpperCase()}${string.slice(1)}`;
  }

  render() {
    const { menu, description, img, id, fetchMenuData, toggleModal } = this.props;
    return (
      <Card
        hoverable
        className={styles.MenuCard}
        onClick={() => {
          fetchMenuData(id);
          toggleModal();
        }}
        cover={<img alt={menu} src={img} className={styles.MenuImage} />}
      >
        <Meta title={this.capitalizeFirstLetter(menu)} description={description} />
      </Card>
    );
  }
}

MenuCard.propTypes = {
  menu: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
};

export default connect(null, { fetchMenuData, toggleModal })(MenuCard);