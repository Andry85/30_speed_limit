import * as React from "react";
import styles from './IndexPage.module.scss';

import img_001 from './img/001.png';
import img_002 from './img/002.png';




function IndexPage() {
  return (
    <div className={styles.main}>
      <h1>Why 30 km/h?</h1>
      <ul className={styles.mainList}>
        <li><b>50%</b> of road accidents in Switzerland</li>
        <li><b>90%</b> killed or seriously injured reached Kingston upon Hull</li>
        <li><b>50%</b> of children killed or seriously injured, reached in London</li>
        <li><b>35%</b> of children were able to play safely on the road, achieved in Edinburgh</li>
      </ul>
      <img src={img_001} alt=""/>
      <p>What can you do to reduce the number of road accidents in your city by 50%, to reduce the number of fatalities and severe injuries on the roads by 90%, and to kill or injure 50% fewer children on the streets? And there are twice as many children who, according to their parents, can play on the streets safely? Tale? No, there are real success stories behind these numbers.</p>
      <img src={img_002} alt=""/>
    </div>
  );
}

export default IndexPage;
