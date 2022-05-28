import './App.css';
import AboutMe from './AboutMe/AboutMe.js';
import Navbar from './Welcome/Welcome';
import Project from './Project/Project';
function App () {
  var lang;
  const browserLanguage = window.navigator.language;
  if (browserLanguage !== "fr-FR") {
    lang = "en";
  } else {
    lang = browserLanguage;
  };

  return (
    <div className="App">
      <Navbar
        lang={lang}
      />
      <AboutMe
        lang={lang}
      />
      <Project
        lang={lang}
      />
    </div>
  );
}

export default App;
