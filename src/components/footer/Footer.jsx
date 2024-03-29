import React from 'react';
import './Footer.css';
import { RiLinkedinFill } from 'react-icons/ri';
import { LuGithub } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>
        Krishna Chaitanya Piratla
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/krishna-piratla/'>
          <RiLinkedinFill />
        </a>

        <a href='https://github.com/krishna-chaitanya-piratla'>
          <LuGithub />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Krishna Chaitanya Piratla. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
