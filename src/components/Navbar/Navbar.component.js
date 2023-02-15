import React from 'react';

import { TbLetterD } from 'react-icons/tb';

import { links, otherLinks } from '../../assets/links';
import LinkComponent from '../Link/Link.component';

import NavbarWrapper from './Navbar.style';

const NavbarComponent = () => {
  return (
    <NavbarWrapper>
      <nav className='links-container'>
        <div className='logo'>
          <span>D</span>
          Dashboard Kit
        </div>
        <div className='main-links'>
          {links.map((link, index) => {
            return <LinkComponent key={link.id} index={index} {...link} />;
          })}
        </div>
        <div className='other-links-container'>
          {otherLinks.map((link) => {
            return <LinkComponent key={link.id} {...link} />;
          })}
        </div>
      </nav>
    </NavbarWrapper>
  );
};

export default NavbarComponent;
