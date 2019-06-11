import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Spin } from 'antd';
import styles from './Loader.module.css';

const Loader = ({ msg }) => (
  <div className={styles.LoaderContainer}>
    <Spin
      tip={msg}
      indicator={
        <Icon
          type='loading'
          className={styles.Loader}
        />
      }
    />
  </div>
);

Loader.propTypes = {
  msg: PropTypes.string
}

export default Loader;