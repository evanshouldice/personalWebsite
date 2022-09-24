import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EV THE DEV</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href='https://linkedin.com' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com' target='_blank'><FaGithub/></a>
        <a href='https://instagram.com' target='_blank'><RiInstagramFill/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EV THE DEV. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer