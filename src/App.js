
import './App.scss';
import Blog from './components/blog';
import Switcher from './components/switcher';
import { LanguageProvider } from './context/languageContext';
import React from "react";
import Wrapper from './components/wrapper';


function App() {

  return (
    <LanguageProvider>
    <div className="App">
      <div className='header'>
        <Switcher />
      </div>
      <Wrapper>
        <Blog />
      </Wrapper>
    </div>
    </LanguageProvider>
  );
}

export default App;
