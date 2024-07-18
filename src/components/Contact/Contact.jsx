import React from 'react'
import styles from "./Contact.module.css"
import {getImageUrl} from "../../utils"
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to react out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                <a href="mailto:thammapakorn.n@gmail.com">thammapakorn.n@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                <a href="https://github.com/thammapakorn">github.com/thammapakorn</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
