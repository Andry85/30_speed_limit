import React, {useState} from "react";
import styles from './Nav.module.scss';


import {
  Link
} from "react-router-dom";

import {useTranslation} from 'react-i18next';


const Nav: React.FunctionComponent = (): JSX.Element => {  

  const {t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const [isVisibleMobileMenu, setisVisibleMobileMenu] = useState(false);


  return (
   
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link to="/">{t('main')}</Link></li>
            <li><Link to="/blog">{t('blog')}</Link></li> 
            <li><Link to="/contacts">{t('contacts')}</Link></li>  
          </ul>

          <ul className={styles.navList}>
            <li>
              <button type="button" onClick={() => changeLanguage('ukr')}>ukr</button>
            </li>
            <li>
              <button type="button" onClick={() => changeLanguage('en')}>en</button>
            </li> 
          </ul>

          <div className={styles.mobileNav}>
            <div 
            className={styles.mobileNav__burger}
            onClick={() => setisVisibleMobileMenu(!isVisibleMobileMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            {isVisibleMobileMenu  &&
              <ul>
                <li><Link to="/">{t('main')}</Link></li>
                <li><Link to="/blog">{t('blog')}</Link></li> 
                <li><Link to="/contacts">{t('contacts')}</Link></li>  
                <li>
                  <button type="button" onClick={() => changeLanguage('ukr')}>ukr</button>
                </li>
                <li>
                  <button type="button" onClick={() => changeLanguage('en')}>en</button>
                </li> 
              </ul>
            }
          </div>


        </nav>
  );
}

export default Nav;
