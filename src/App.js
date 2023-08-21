import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
          <form>
          <div className='row'>
            <div className='col-md-9'><input type="search" placeholder='Enter the city...'/></div>
            <div className='col-md-3'><input type="submit" value="Search" className='btn btn-primary'/></div>
            </div>
            </form>
        
        
        <h1>Weather App</h1>
      </div>
      <footer>
      This project was coded by Olena Kononchuk and is <a href="https://github.com/evakononchuk/react_search_engine" target="_blank" rel="noreferrer">open-sourced</a> on GitHubandhosted on <a href="https://thunderous-klepon-328691.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
      </footer>
    </div>
  );
}