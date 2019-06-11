import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Typography, Icon } from 'antd';
import { toggleSidebar } from '../../actions';
import MenuCard from '../MenuCard/MenuCard';
import styles from './Home.module.css';
import burgers from '../../assets/burgers.png';
import sides from '../../assets/sides.png';
import drinks from '../../assets/drinks.png';

const { Title } = Typography;

class Home extends Component {
  render() {
    return (
      <div className={styles.HomeContainer}>
        <div>
        <Icon
          type='menu'
          className={styles.ToggleButton}
          onClick={this.props.toggleSidebar}
        />
          <Title>Welcome To McBurgerKing</Title>
          <Title level={3}>Where taste is king!</Title>
        </div>
        <div>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <MenuCard
              menu='Burgers'
              description='Check out our delicous burgers!'
              img={burgers}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <MenuCard
              menu='Sides'
              description='Great sides to go along with your burgers!'
              img={sides}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <MenuCard
              menu='Drinks'
              description='Refreshing drinks to quench your thirst!'
              img={drinks}
            />
          </Col>
        </div>
      </div>
    );

  }
}

const mapStateToProps = ({ ui_visibility }) => {
  return {
    ui_visibility
  };
};

export default connect(mapStateToProps, { toggleSidebar })(Home);