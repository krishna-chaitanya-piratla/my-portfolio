import React from 'react';
import CV from '../../assets/cv.pdf';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const CallToAction = () => {
  return (
    <div className='cta'>
      <Tippy content='Download my resume'>
        <a href={CV} download className='btn'>
          Download CV
        </a>
      </Tippy>
      <Tippy content='Get in touch with me'>
        <a href='#contact' className='btn btn-primary'>
          Contact Me
        </a>
      </Tippy>
    </div>
  );
};

export default CallToAction;
