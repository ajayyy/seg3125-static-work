import logo from './logo.svg';
import './App.css';
import Gallery from "./components/Gallery";
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import ThemePreview from './components/ThemePreview';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">
      <h1 style={{fontSize: "55px"}}>Themeorama</h1>

      {/* <Gallery /> */}
      <ThemePreview 
          image={`wallpapers/wallpaper${Math.ceil(Math.random() * 6)}.jpg`}
          name={"Theme 1"}
          rating={Math.ceil(Math.random() * 10)}
          categoryIcon={faGamepad}
          category={"Gaming"} />

      {/* <SearchPage/> */}
    </div>
  );
}

export default App;
