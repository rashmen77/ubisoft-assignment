import React from 'react';
import Logo from '../../images/header/logo.png';
import Banner from '../../images/header/Layer15.png';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <div className='header-logo-container'>
          <img className='header-logo' alt='' src={Logo}></img>
        </div>
        <img className='header-banner' alt='' src={Banner}></img>
      </div>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>GAME INFO</li>|
          <li className='nav-item'>ASSASSINS CREED UNIVERSE</li>|
          <li className='nav-item'>UPLAY</li>|
          <li className='nav-item'>FORUMS</li>|
          <li className='nav-item'>REGISTER FOR UPDATES</li>|
          <li className='nav-item'>PRE-ORDER</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
