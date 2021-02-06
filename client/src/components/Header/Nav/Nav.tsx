import * as React from "react";
import styles from './Nav.module.scss';

import {
  Link
} from "react-router-dom";

import {useTranslation} from 'react-i18next';


function Nav() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };


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
        </nav>
  );
}

export default Nav;
