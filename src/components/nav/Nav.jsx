import React from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <Tippy content='Home'>
        <a
          id='a'
          href='#home'
          onClick={() => setActiveNav('#home')}
          className={activeNav === '#home' ? 'active' : ''}
        >
          <AiOutlineHome />
        </a>
      </Tippy>
      <Tippy content='About'>
        <a
          id='b'
          href='#about'
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <AiOutlineUser />
        </a>
      </Tippy>
      <Tippy content='Experience'>
        <a
          id='c'
          href='#experience'
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          <BiBook />
        </a>
      </Tippy>
      <Tippy content='Contact'>
        <a
          id='d'
          href='#contact'
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <BiMessageSquareDetail />
        </a>
      </Tippy>
    </nav>
  );
};

export default Nav;
