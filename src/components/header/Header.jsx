import React from 'react';
import './Header.css';
import CallToAction from './CallToAction';
import ME from '../../assets/me.jpg';
import Socials from './Socials';

const Header = () => {
  return (
    <header>
      <div className='header__container' id='home'>
        <h5> Hello I'm</h5>
        <h1>Krishna Piratla</h1>
        <h5 className='text-light'>
          Full Stack Developer | Product Development Manager | Technical Writer
          | Private Tutor{' '}
        </h5>
        <CallToAction />
        <Socials />
        <div className='me'>
          <img src={ME} alt='' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
