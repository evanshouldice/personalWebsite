import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/evanshouldice' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/evanshouldice' target='_blank'><FaGithub/></a>
        <a href='https://instagram.com/evanshouldice' target='_blank'><RiInstagramFill/></a>
    </div>
  )
}

export default HeaderSocials