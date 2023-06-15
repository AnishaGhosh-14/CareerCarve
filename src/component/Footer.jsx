import React from 'react'
import classes from './Footer.module.css'
import insta from '../assets/insta.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

export default function Footer() {
  return (
    <div className={classes.footer}>
        <div className={classes.footerUp}>
        <img src={insta} alt="Instagram" />
        <a href="https://github.com/AnishaGhosh-14" target="_blank" rel="noopener noreferrer">
  <img src={github} alt="Github" />
</a>
<a href="linkedin.com/in/anisha-ghosh-9704591b9/" target="_blank" rel="noopener noreferrer">
  <img src={linkedin} alt="Linkedin" />
</a>
        </div>
        <div className={classes.footerDown}>
         <h6>© Anisha Ghosh 2023</h6>
         </div>
    </div>
  )
}
