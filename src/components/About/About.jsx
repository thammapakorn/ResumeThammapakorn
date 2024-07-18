import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../utils'


const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/gpsicon.png")}alt="Server icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Address</h3>
                        <p>
                            111/66 Phetkasem53, Laksong, Bangkae, Bangkok, Thailand 10160<br/>
                            +66 0633544417 <br/>
                            line : pmch. <br/>
                            mail : thammapakorn.n@gmail.com 
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/education.png")}alt="Cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Education</h3>
                        <p>Bacherlor Degrees (2016-2022)
                           <br/>From Rajamangala University Of Technology Rattanakosin
                           <br/> Faculty of Business Information Technology
                        </p>
                    </div>
                </li>

            </ul>
        </div>
    </section>
  )
}

export default About
