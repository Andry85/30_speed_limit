import * as React from "react";
import styles from './Nav.module.scss';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><a href="#">Main</a></li>
        <li><a href="#">Blog</a></li> 
        <li><a href="#">Contacts</a></li>  
      </ul>

      <ul className={styles.navList}>
        <li><a href="#">ukr</a></li>
        <li><a href="#">eng</a></li> 
      </ul>
    </nav>
  );
}

export default Nav;
