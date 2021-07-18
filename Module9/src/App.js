import logo from './logo.svg';
import './App.css';
import Gallery from "./components/Gallery";
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import ThemePreview from './components/ThemePreview';
import SearchPage from './components/SearchPage';
import SubmitPage from './components/SubmitPage';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';


const home = 'home', search = 'search', submit = 'submit', themePreview = 'themePreview';
let state, setState;

function App() {
  [state, setState] = useState({
    page: home,
    language: 'en',
  });

  return (
    <div className="App">
      <h1 style={{fontSize: "55px"}}>Themeorama</h1>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Language
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setState({...state, language: 'en'})}>English</Dropdown.Item>
          <Dropdown.Item onClick={() => setState({...state, language: 'fr'})}>French</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      { getPage() }

    </div>
  );
}

function getPage() {
  switch (state.page) {
    case home:
    case search:
      return <SearchPage
              pageChange={pageChange}
              language={state.language} />;
    case submit:
      return <SubmitPage
              pageChange={pageChange}
              language={state.language} />;
    case themePreview:
      return <ThemePreview
              image={state.theme.image}
              name={state.theme.name}
              rating={state.theme.rating}
              categoryIcon={state.theme.categoryIcon}
              category={state.theme.category}
              pageChange={pageChange}
              language={state.language} />;
    default:
      return null;
  }
}

function pageChange(page, theme) {
  setState(prevState => ({...state, page, theme}));
  window.history.pushState({page, theme}, null);
}

window.onpopstate = (event) => {
  console.log(event)
  setState(prevState => ({...state, page: event.state?.page || home, theme: event.state?.theme}));
};


export default App;
