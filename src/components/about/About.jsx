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
              <BiCodeAlt className='about__icon'/>
              <h5>Current Occupation</h5>
              <small>Full Stack Engineer Intern - Thinktum Inc (May 2022 - Present)</small>
            </article>
            <article className='about__card'>
              <MdSchool className='about__icon'/>
              <h5>Current Program</h5>
              <small>Software Engineering Technology (Co-op) - Conestoga College (Completed 2 of 3 years)</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Past Education</h5>
              <small>Bachelor of Arts Degree - Wilfrid Laurier University (2010-2014)</small>
            </article>
          </div>

          <p>
            This site is a work in progress and so am I.  I went back to school at the age of 29 to switch careers
            and build things!  I am currently in the middle of my second 4-month co-op term.  I work remotely from Canmore, Alberta
            for Thinktum Inc, an insurtech startup based in Waterloo, Ontario.  My current role is Full Stack Engineer Intern.
            I looking for new opportunities and I am available for a 4 or 8-month co-op term starting in January 2023.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About