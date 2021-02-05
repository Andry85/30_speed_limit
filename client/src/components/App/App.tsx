import * as React from "react";
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


import img_001 from './img/001.png';

const blogs = [
  {
    id: 0,
    title: "Why 30 km/h?",
    pic: img_001,
    text: "What can you do to reduce the number of road accidents in your city by 50%, to reduce the number of fatalities and severe injuries on the roads by 90%, and to kill or injure 50% fewer children on the streets? And there are twice as many children who, according to their parents, can play on the streets safely? Tale? No, there are real success stories behind these numbers.",
    link: "blog/articl1_1",
    extraText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
  },
  {
    id: 1,
    title: "Why 30 km/h?",
    pic: img_001,
    text: "What can you do to reduce the number of road accidents in your city by 50%, to reduce the number of fatalities and severe injuries on the roads by 90%, and to kill or injure 50% fewer children on the streets? And there are twice as many children who, according to their parents, can play on the streets safely? Tale? No, there are real success stories behind these numbers.",
    link: "blog/articl1_2",
    extraText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
  },
  {
    id: 2,
    title: "Why 30 km/h?",
    pic: img_001,
    text: "What can you do to reduce the number of road accidents in your city by 50%, to reduce the number of fatalities and severe injuries on the roads by 90%, and to kill or injure 50% fewer children on the streets? And there are twice as many children who, according to their parents, can play on the streets safely? Tale? No, there are real success stories behind these numbers.",
    link: "blog/articl1_3",
    extraText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
  }
];



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
              <Route exact path="/blog">
                <Blog blogData = {blogs} />
              </Route>
              <Route exact path="/contacts">
                <Contacts />
              </Route>
              <Route path="/blog/:id">
                <Article AricleData = {blogs} />
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
