import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='' />
          </div>
        </div>
        <div className='about__content'>
          <p>I thrive on learning and working in a wide range of fields...</p>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Programming Experience</h5>
              <small>3+ years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Full Stack Experience</h5>
              <small>2+ years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Machine Learning</h5>
              <small>2+ years</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Product Development Experience</h5>
              <small>5+ years</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Marketing and Operations</h5>
              <small>3+ years</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Instructor/Tutor</h5>
              <small>3+ years</small>
            </article>
          </div>
          <br />
          <a href='#contact' className='btn'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
