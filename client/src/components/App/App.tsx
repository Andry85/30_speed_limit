import * as React from "react";
import styles from './App.module.scss';
import sign from './img/sign.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IndexPage from '../views/IndexPage';
import Blog from '../views/Blog';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header
          speed="30 km/h"
          title="is a safe speed that will save the lives of your loved ones."
          pic={sign}
        />
        <div className={styles.app__container}>
            <Switch>
              <Route exact path="/">
                <IndexPage />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
            </Switch>
        </div>
        <Footer
          title="All rights reserved. 2021"
        />
      </div>
    </Router>
  );
}

export default App;
