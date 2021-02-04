import * as React from "react";
import styles from './App.module.scss';

import Header from '../../components/Header';

import sign from './img/sign.png';

function App() {
  return (
    <div className={styles.app}>
      <Header
        title="30 km/h is a safe speed that will save the lives of your loved ones."
        pic={sign}
      />
    </div>
  );
}

export default App;
