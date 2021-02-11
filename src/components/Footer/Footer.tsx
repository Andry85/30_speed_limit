import * as React from "react";
import styles from './Footer.module.scss';
import {useTranslation} from 'react-i18next';



const Footer: React.FunctionComponent = (): JSX.Element => {
  const {t} = useTranslation();

  return (
    <footer className={styles.footer}>
      <p>{t('footerText')}</p>
    </footer>
  );
}

export default Footer;
