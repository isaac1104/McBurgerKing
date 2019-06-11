import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { toggleModal } from '../../actions';
import styles from './MenuCard.module.css';

const { Meta } = Card;

class MenuCard extends Component {
  render() {
    const { menu, description, img, id, toggleModal } = this.props;
    return (
      <Card
        hoverable
        className={styles.MenuCard}
        onClick={() => {
          console.log(id);
          toggleModal();
        }}
        cover={<img alt={menu} src={img} className={styles.MenuImage} />}
      >
        <Meta title={menu} description={description} />
      </Card>
    );
  }
}

MenuCard.propTypes = {
  menu: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
};

export default connect(null, { toggleModal })(MenuCard);