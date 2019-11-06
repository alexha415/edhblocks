import React from 'react'
import styles from './Home.module.scss';
import Information from '../../Information/Information';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={`${styles.section} flex-col`}>
        <div className={`${styles.header} flex-row`}>
          <h4>E</h4>
          <h4>D</h4>
          <h4>H</h4>
          <h4>B</h4>
          <h4>L</h4>
          <h4>O</h4>
          <h4>C</h4>
          <h4>K</h4>
          <h4>S</h4>
        </div>
        <p>Welcome to EDHBlocks, a deck-building website for the popular card game Magic: The Gathering&copy; by Wizards of the Coast</p>
        <a href="#home__info-container" className={`${styles.infoButton}`}>Learn More</a>
      </div>
      <div id='home__info-container'className={`${styles.infoContainer} flex-row`}>
        <Information/>
      </div>
    </div>
  )
}

export default Home
