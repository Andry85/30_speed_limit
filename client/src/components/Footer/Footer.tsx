import * as React from "react";
import styles from './Footer.module.scss';


type FooterProps = {
  title: string,
}

function Footer({ title}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p>{title}</p>
    </footer>
  );
}

export default Footer;
