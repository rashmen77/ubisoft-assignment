import React from 'react';
import Ubisoft from '../../images/footer/ubisoft.png';
import Xbox from '../../images/footer/xbox.png';
import Ps3 from '../../images/footer/ps3.png';
import Pc from '../../images/footer/PC.png';
import Esrb from '../../images/footer/esrb.png';
import Mrating from '../../images/footer/Mrating.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='footer-container'>
        <div className='footer-logo-row'>
          <img className='footer-logo' src={Ubisoft} alt='' />
          <img className='footer-logo' src={Xbox} alt='' />
          <img className='footer-logo' src={Ps3} alt='' />
          <img className='footer-logo' src={Pc} alt='' />
        </div>
        <div className='footer-logo-row'>
          <img className='footer-logo' src={Esrb} alt='' />
          <img className='footer-logo' src={Mrating} alt='' />
          <div className='ratings'>
            <ul className='ratings-list'>
              <li>Blood</li>
              <li>Language</li>
              <li>Mild Sexual Themes</li>
              <li>Violence</li>
            </ul>
          </div>
        </div>
        <div className='footer-copyright-text'>
          © 2011 Ubisoft Entertainment. All Rights Reserved. Assassin’s Creed,
          Ubisoft, and the Ubisoft logo are trademarks of Ubisoft Entertainment
          in the US and/or other countries. “PlayStation” and the “PS” Family
          logo are registered trademarks and “PS3” and the PlayStation Network
          logo are trademarks of Sony Computer Entertainment Inc. KINECT, Xbox,
          Xbox 360, Xbox LIVE, and the Xbox logos are trademarks of the
          Microsoft group of companies and are used under license from
          Microsoft. Software platform logo (TM and ©) EMA 2006.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
