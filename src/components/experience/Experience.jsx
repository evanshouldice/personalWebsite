import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiNodejsSmall} from 'react-icons/di'
import {FaReact, FaGithub} from 'react-icons/fa'
import {SiRubyonrails, SiPython, SiDotnet, SiLinux, SiMysql, SiCsharp, SiCplusplus, SiGitlab, SiTypescript, SiJavascript, SiMongodb, SiMiro, SiJirasoftware, SiDocker} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Continued Learning</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__work">
          <h5>Currently Using For</h5>
          <h3>Workplace Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>ReactJS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React Flow</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiTypescript className='experience__details-icon'/>
              <div>
                <h4>Typescript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <DiNodejsSmall className='experience__details-icon'/>
              <div>
                <h4>Node.js</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiMiro className='experience__details-icon'/>
              <div>
                <h4>Miro</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiJirasoftware className='experience__details-icon'/>
              <div>
                <h4>Jira</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiDocker className='experience__details-icon'/>
              <div>
                <h4>Docker</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiGitlab className='experience__details-icon'/>
              <div>
                <h4>Gitlab</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF WORK EXP */}

        <div className="experience__school">
        <h5>Previously Used For</h5>
        <h3>School Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <SiCplusplus className='experience__details-icon'/>
              <div>
                <h4>C/C++</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiCsharp className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiLinux className='experience__details-icon'/>
              <div>
                <h4>Linux</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaGithub className='experience__details-icon'/>
              <div>
                <h4>Github</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiDotnet className='experience__details-icon'/>
              <div>
                <h4>.NET</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiRubyonrails className='experience__details-icon'/>
              <div>
                <h4>Ruby on Rails</h4>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience