import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Typography, Icon } from 'antd';
import { toggleSidebar } from '../../actions';
import MenuCard from '../MenuCard/MenuCard';
import styles from './Home.module.css';

const { Title } = Typography;

class Home extends Component {
  renderMenuCard() {
    const { data } = this.props.menu;
    if (data) {
      return data.map(({ id, type, description, img }) => (
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <MenuCard
            key={id}
            menu={type}
            description={description}
            img={img}
          />
        </Col>
      ));
    }
    return null;
  }

  render() {
    console.log(this.props.menu.data)
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

const mapStateToProps = ({ menu, ui_visibility }) => {
  return {
    menu,
    ui_visibility
  };
};

export default connect(mapStateToProps, { toggleSidebar })(Home);