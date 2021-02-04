import * as React from "react";
import styles from './Nav.module.scss';

import {
  Link
} from "react-router-dom";

function Nav() {
  return (
   
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/blog">Blog</Link></li> 
            <li><Link to="/contacts">Contacts</Link></li>  
          </ul>

          <ul className={styles.navList}>
            <li><a href="#">ukr</a></li>
            <li><a href="#">eng</a></li> 
          </ul>
        </nav>
  );
}

export default Nav;
