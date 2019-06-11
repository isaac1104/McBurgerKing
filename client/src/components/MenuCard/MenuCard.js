import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import styles from './MenuCard.module.css';

const { Meta } = Card;

const MenuCard = ({ menu, description, img }) => {
  return (
    <Card
      hoverable
      className={styles.MenuCard}
      cover={<img alt='example' src={img} className={styles.MenuImage} />}
    >
      <Meta title={menu} description={description} />
    </Card>
  );
}

MenuCard.propTypes = {
  menu: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
};

export default MenuCard;