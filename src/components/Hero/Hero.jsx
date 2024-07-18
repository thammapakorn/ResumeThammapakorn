import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pream</h1> 
        <p className={styles.description}>
         I've been working as an IT Support for 4 years.<br/>
         I've always been interested in programming and I'm a self-motivated learner.<br/>
         I'm confident that my skills and experience will make me a valuable asset to this position.
        </p>
        <a href='mailto:Thammapakorn.n@gmail.com' className={styles.contactBtn}>
           Contact Me
        </a>
      </div>
      <img
      src={getImageUrl("hero/heroImage.png")}
      alt="Hero image of me"
      className={styles.heroImg}
      />
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
