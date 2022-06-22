import React from 'react';
import './App.css';
import AboutMe from './AboutMe/AboutMe.js';
import Welcome from './Welcome/Welcome';
import Project from './Project/Project';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';
function App () {
  var lang;
  const browserLanguage = window.navigator.language;
  const { t, i18n } = useTranslation();
  //i18n.changeLanguage(browserLanguage.slice(0,2));
  return (
    <div className="App">
      <Welcome
        t={t}
        i18n={i18n}
      />
      <AboutMe
        t={t}
        i18n={i18n}
      />
      <Project
        t={t}
        i18n={i18n}
      />
    </div>
  );
}

export default App;
