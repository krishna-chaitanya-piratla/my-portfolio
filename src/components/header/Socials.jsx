import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Socials = () => {
  return (
    <div className='socials__header'>
      <Tippy content='LinkedIn'>
        <a
          href='https://www.linkedin.com/in/krishna-piratla/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
      </Tippy>
      <Tippy content='GitHub'>
        <a
          href='https://github.com/krishna-chaitanya-piratla'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
      </Tippy>
    </div>
  );
};

export default Socials;
