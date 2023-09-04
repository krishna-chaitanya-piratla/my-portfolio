import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Socials = () => {
  return (
    <div className='socials__header'>
      <Tippy content='LinkedIn'>
        <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
      </Tippy>
      <Tippy content='GitHub'>
        <a href='https://www.github.com' target='_blank' rel='noreferrer'>
          <FaGithub />
        </a>
      </Tippy>
    </div>
  );
};

export default Socials;
