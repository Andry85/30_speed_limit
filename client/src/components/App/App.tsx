import * as React from "react";
import styles from './App.module.scss';

import Header from '../../components/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
    </div>
  );
}

export default App;
