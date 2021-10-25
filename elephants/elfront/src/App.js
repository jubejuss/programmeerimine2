import logo from './logo.svg';
import './App.css';
const axios = require('axios');

const elephantsUrl = 'http://localhost:4000/elephants';

async function App() {
  getElephants();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const getElephants = async () => {
  try {
    const elephantsResponse = await axios.get(elephantsUrl);
    console.log(elephantsResponse);
  } catch (error) {
    console.log(error);
  }
};

export default App;
