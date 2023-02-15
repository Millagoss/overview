import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdNotificationAdd } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';
const HeaderComponent = () => {
  return (
    <header>
      <h4>Overview</h4>
      <div className='contact-and-search'>
        <div className='search'>
          <BsSearch />
          <MdNotificationAdd />
        </div>
        <div className='contact'>
          <p> Wawa Fike</p> <IoMdContact />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
