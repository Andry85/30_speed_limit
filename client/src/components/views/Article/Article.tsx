import * as React from "react";
import styles from './Article.module.scss';


import {
  useParams
} from "react-router-dom";


interface ParamTypes {
  id: string
}


function Article(props: any) {

  let {id} = useParams<ParamTypes>();


  const found:any = props.AricleData.find(function (element:any) {
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
