import * as React from "react";
import styles from './Blog.module.scss';

import img_001 from './img/001.png';
import img_002 from './img/002.png';




function Blog() {
  return (
    <div className={styles.blog}>
      <h2><a href="#">Why 30 km/h?</a></h2>
      <a href="#"><img src={img_001} alt=""/></a>
      <p>What can you do to reduce the number of road accidents in your city by 50%, to reduce the number of fatalities and severe injuries on the roads by 90%, and to kill or injure 50% fewer children on the streets? And there are twice as many children who, according to their parents, can play on the streets safely? Tale? No, there are real success stories behind these numbers.</p>
      <a className={styles.blog__readMore} href="#">Read more</a>
    </div>
  );
}

export default Blog;
