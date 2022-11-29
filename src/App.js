import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Hi</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NBA TEAMS
        </p>
          <p>
              Dunk it
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn basketball
        </a>
      </header>
    </div>
  );
}

export default App;
