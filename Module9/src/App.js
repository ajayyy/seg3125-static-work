import logo from './logo.svg';
import './App.css';
import Gallery from "./components/Gallery";
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import ThemePreview from './components/ThemePreview';
import SearchPage from './components/SearchPage';
import SubmitPage from './components/SubmitPage';
import React, { useState } from 'react';

const home = 'home', search = 'search', submit = 'submit', themePreview = 'themePreview';
let state, setState;

function App() {
  [state, setState] = useState({
    page: home
  });

  return (
    <div className="App">
      <h1 style={{fontSize: "55px"}}>Themeorama</h1>

      { getPage() }

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
    case themePreview:
      return <ThemePreview
              image={state.theme.image}
              name={state.theme.name}
              rating={state.theme.rating}
              categoryIcon={state.theme.categoryIcon}
              category={state.theme.category}
              pageChange={pageChange} />;
    default:
      return null;
  }
}

function pageChange(page, theme) {
  setState(prevState => ({page, theme}));
  window.history.pushState({page, theme}, null);
}

window.onpopstate = (event) => {
  console.log(event)
  setState(prevState => ({page: event.state?.page || home, theme: event.state?.theme}));
};


export default App;
