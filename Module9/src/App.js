import logo from './logo.svg';
import './App.css';
import Gallery from "./components/Gallery";
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import ThemePreview from './components/ThemePreview';

function App() {
  return (
    <div className="App">
      {/* <Gallery /> */}
      <ThemePreview 
          image="none"
          name={"Theme 1"}
          rating={Math.ceil(Math.random() * 10)}
          categoryIcon={faGamepad}
          category={"Gaming"} />
    </div>
  );
}

export default App;
