import * as React from "react";
import styles from './Article.module.scss';


import {
  useParams
} from "react-router-dom";

import {useTranslation} from 'react-i18next';


interface ParamTypes {
  id: string
}


function Article() {

  let {id} = useParams<ParamTypes>();

  const {t} = useTranslation();
  const resArr: any = t('blogs', {returnObjects: true});


  const found:any = resArr.find(function (element:any) {
    return element.link === `blog/${id}`
  });

  return (
    <div className={styles.article}>
        <div className={styles.article__inner}>
          <h1>{found.title}</h1>
          <img src={found.pic} alt=""/>
          <p>{found.text}</p>
          <p>{found.extra}</p>
        </div>
    </div>
  );
}

export default Article;
