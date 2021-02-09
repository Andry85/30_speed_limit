import * as React from "react";
import styles from './IndexPage.module.scss';

import img_001 from './img/001.png';
import img_002 from './img/002.png';


import {useTranslation} from 'react-i18next';




function IndexPage() {

  const { t, i18n } = useTranslation();

  const resArr: any = t('indexPage.mainList', {returnObjects: true});

  return (
    <div className={styles.main}>
      <h1>{t('indexPage.title')}</h1>
      <ul className={styles.mainList}>
        {resArr.map((item: any) => 
          <li><b>{item.count}</b> {item.text}</li>
        )}
      </ul>
      <img src={img_001} alt=""/>
      <p>{t('indexPage.text')}</p>
      <img src={img_002} alt=""/>
    </div>
  );
}

export default IndexPage;
