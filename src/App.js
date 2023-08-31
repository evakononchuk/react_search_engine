import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
        <footer>
         This project was coded by Olena Kononchuk and is <a href="https://github.com/evakononchuk/react_search_engine" target="_blank" rel="noreferrer">open-sourced</a> on <a href="https://thunderous-klepon-328691.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
        </footer>
      </div>
    </div>
  );
}