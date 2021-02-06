import * as React from "react";
import styles from './Header.module.scss';

import Nav from './Nav';

type HeaderProps = {
  speed: string,
  title: string,
  pic: string
}

function Header({ title, pic, speed }: HeaderProps) {
  
  return (
    <header className={styles.header}>
      <Nav/>
      <div className={styles.header__inner}>
        <h2 className={styles.header__title}>
          <span>{speed}</span>
          {title}
        </h2>
        <img className={styles.header__sigh} src={pic} alt=""/>
      </div>
    </header>
  );
}

export default Header;
