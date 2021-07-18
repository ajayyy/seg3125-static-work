import logo from './logo.svg';
import './App.css';
import Gallery from "./components/Gallery";
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import ThemePreview from './components/ThemePreview';
import SearchPage from './components/SearchPage';
import SubmitPage from './components/SubmitPage';
import React, { useState } from 'react';

const home = 'home', search = 'search', submit = 'submit';
let state, setState;

function App() {
  [state, setState] = useState({
    page: home
  });

  return (
    <div className="App">
      <h1 style={{fontSize: "55px"}}>Themeorama</h1>

      { getPage() }

      {/* <Gallery /> */}
      {/* <ThemePreview 
          image={`wallpapers/wallpaper${Math.ceil(Math.random() * 6)}.jpg`}
          name={"Theme 1"}
          rating={Math.ceil(Math.random() * 10)}
          categoryIcon={faGamepad}
          category={"Gaming"} /> */}

      {/* <SearchPage/> */}

      {/* <SubmitPage/> */}
    </div>
  );
}

function getPage() {
  switch (state.page) {
    case home:
    case search:
      return <SearchPage
              pageChange={pageChange} />;
    case submit:
      return <SubmitPage
              pageChange={pageChange} />;
    default:
      return null;
  }
}

function pageChange(page) {
  setState(prevState => ({page}));
}



export default App;
