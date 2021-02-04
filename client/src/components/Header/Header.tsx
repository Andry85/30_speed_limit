import * as React from "react";
import styles from './Header.module.scss';

import Nav from './Nav';

type HeaderProps = {
  title: string,
  pic: string
}

function Header({ title, pic }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Nav/>
      <h2 className={styles.header__title}>{title}</h2>
      <img className={styles.header__sigh} src={pic} alt=""/>
    </header>
  );
}

export default Header;
