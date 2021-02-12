import React from 'react';
import styles from './App.module.scss';
import sign from './img/sign.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IndexPage from '../views/IndexPage';
import Blog from '../views/Blog';
import Article from '../views/Article';
import Contacts from '../views/Contacts';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {useTranslation} from 'react-i18next';




const App: React.FunctionComponent = (): JSX.Element => {

  const {t} = useTranslation();

  

  return (
      <Router>
        <div className={styles.app}>
          <Header
            speed={t('speedLimitHeader')}
            title={t('headerTitle')}
            pic={sign}
          />
          <div className={styles.app__container}>
              <Switch>
                <Route exact path="/">
                  <IndexPage />
                </Route>
                <Route exact path="/blog">
                  <Blog />
                </Route>
                <Route exact path="/contacts">
                  <Contacts />
                </Route>
                <Route path="/blog/:id">
                  <Article />
                </Route>
                
              </Switch>
          </div>
          <Footer />
        </div>
      </Router>

  );
}

export default App;
