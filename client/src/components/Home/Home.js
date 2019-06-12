import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Typography, Icon } from 'antd';
import { toggleSidebar } from '../../actions';
import MenuCard from '../MenuCard/MenuCard';
import styles from './Home.module.css';

const { Title } = Typography;

class Home extends Component {
  renderMenuCard() {
    const { data } = this.props.menus;

    if (data) {
      return data.map(({ items }) => items.map(({ id, name, price, img }) => (
        <Col key={id} xs={24} sm={24} md={24} lg={8} xl={8}>
          <MenuCard
            name={name}
            price={price}
            img={img}
            id={id}
          />
        </Col>
      )))
    }
    return null;
  }

  render() {
    const { toggleSidebar } = this.props;
    return (
      <div className={styles.HomeContainer}>
        <div>
          <Icon
            type='menu'
            className={styles.ToggleButton}
            onClick={toggleSidebar}
          />
          <Title>Welcome To McBurgerKing</Title>
          <Title level={3}>Where taste is king!</Title>
        </div>
        <div>
          {this.renderMenuCard()}
        </div>
      </div>
    );

  }
}

const mapStateToProps = ({ menus, ui_visibility }) => {
  return {
    menus,
    ui_visibility
  };
};

export default connect(mapStateToProps, { toggleSidebar })(Home);