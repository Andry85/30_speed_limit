import * as React from "react";
import styles from './Blog.module.scss';

import {
  Link
} from "react-router-dom";




function Blog(props: any) {

  return (
    <div className={styles.blog}>
      {props.blogData.map((article: any) =>
        <div className={styles.blog__inner} key={article.id}>
          <h2><Link to={article.link}>{article.title}</Link></h2>
          <Link to={article.link}><img src={article.pic} alt=""/></Link>
          <p>{article.text}</p>
          <Link className={styles.blog__readMore} to={article.link}>Read more <span>&#10095;</span></Link>
        </div>
      )}
    </div>
  );
}

export default Blog;
