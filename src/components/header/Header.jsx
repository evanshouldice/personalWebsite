import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me.png'
import ME2 from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Evan Shouldice</h1>
        <h5 className="text-light">Full Stack Engineer Intern</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me' 
            onMouseOver={e => e.currentTarget.src = ME2}
            onMouseOut={e => e.currentTarget.src = ME}
          />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header