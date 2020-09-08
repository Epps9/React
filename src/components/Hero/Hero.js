import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
    <header class={styles.component}>
      <h2 className={styles.title}>Thinks to do!</h2>
      <img class={styles.image}src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" alt="image"></img>
    </header>
  );

export default Hero;