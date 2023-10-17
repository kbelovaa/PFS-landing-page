import React, { useContext } from 'react';
import ThemeContext from '../../utils/themeContext';
import './Footer.scss';

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="footer-wrap">
      <div className="container">
        <div className={`footer ${theme}`}>
          <p className="footer__rights">Copyright © 2023 PF. All rights reserved</p>
          <div className="footer__links">
            <a className="footer__link">Terms of Use</a>
            <a className="footer__link">Cookies</a>
            <a className="footer__link">Privacy Policy</a>
            <a className="footer__link">Legal Notice</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
