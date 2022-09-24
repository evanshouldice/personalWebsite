import React from 'react'
import "./about.css"
import ME from '../../assets/AboutMe.jpg'
import{FaAward} from 'react-icons/fa'
import{BiCodeAlt} from 'react-icons/bi'
import{MdSchool} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>8 Months Working</small>
            </article>
            <article className='about__card'>
              <BiCodeAlt className='about__icon'/>
              <h5>Current Stack</h5>
              <small>Typescript, React, Node.js</small>
            </article>
            <article className='about__card'>
              <MdSchool className='about__icon'/>
              <h5>Current Program</h5>
              <small>Software Engineering Technology</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Libero officia quibusdam vitae? Sint culpa dicta delectus 
            sequi quidem deleniti perspiciatis vitae ipsa a eveniet ipsam, 
            commodi et quasi nisi dolores.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About