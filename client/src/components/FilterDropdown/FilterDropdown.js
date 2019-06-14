import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import { filterMenuTypes } from '../../actions';
import styles from './FilterDropdown.module.css';

const { Option } = Select;

class FilterDropdown extends Component {
  render() {
    return (
      <Select
        className={styles.FilterDropdown}
        defaultValue='all'
        onChange={value => this.props.filterMenuTypes(value)}
      >
        <Option value='all'>All</Option>
        <Option value='burgers'>Burgers</Option>
        <Option value='sides'>Sides</Option>
        <Option value='drinks'>Drinks</Option>
      </Select>
    );
  }
}

export default connect(null, { filterMenuTypes })(FilterDropdown);