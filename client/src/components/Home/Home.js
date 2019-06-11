import React from 'react';
import { Col, Typography } from 'antd';
import MenuCard from '../MenuCard/MenuCard';
import styles from './Home.module.css';
import burgers from '../../assets/burgers.png';
import sides from '../../assets/sides.png';
import drinks from '../../assets/drinks.png';

const { Title } = Typography;

const Home = () => {
  return (
    <div className={styles.HomeContainer}>
      <div>
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

export default Home;