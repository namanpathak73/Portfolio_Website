import React from 'react';
import "./About.css"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

    <div className='about__container grid'>
    <img src= "https://i.ibb.co/k89WFzY/about-us-pic.png" alt='' className='about__img'/>

    <div className='about__data grid'>
      <div className='about__info'>
        <p className='about__description'>
        Dedicated Computer Science Engineering student skilled in Java programming, Data Structures, and Algorithms. Proficient in full-stack MERN development with a focus on optimizing code and solving complex problems. Eager to apply my expertise in a challenging and dynamic role.
        </p>
        <a href='https://drive.google.com/file/d/1gjmGL_wiOvEIl7YlhmS-kmjFVsoZrOZr/view?usp=drive_link' className='btn' download={"Naman's Resume"}>Download Resume</a>
      </div>

      <div className='about__skills grid'>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>
            Development
            </h3>
            <span className='skills__number'>85%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage development'></span>
          </div>
        </div>

       

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>DSA</h3>
            <span className='skills__number'>60%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage DSA'></span>
          </div>
        </div>

      </div>

    </div>
    </div>

    <AboutBox/>

    </section>
  )
}

export default About