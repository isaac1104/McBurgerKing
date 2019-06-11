import React from 'react';
import { Col } from 'antd';
import MenuCard from '../MenuCard/MenuCard';
import styles from './Home.module.css';
import burgers from '../../assets/burgers.png';
import sides from '../../assets/sides.png';
import drinks from '../../assets/drinks.png';

const Home = () => {
  return (
    <div className={styles.HomeContainer}>
      <Col xs={24} sm={24} md={24} lg={8} xl={8}>
        <MenuCard 
        menu='Burgers'
        description='Our delicous burgers!'  
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
          description='Refreshing drinks!'
          img={drinks}
        />
      </Col>
    </div>
  );
}

export default Home;