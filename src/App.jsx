import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [connectionMessage, setConnectionMessage] = useState('Checking connection...');

  useEffect(() => {
    fetch('https://02-be-csdwahhchnh2axbg.southeastasia-01.azurewebsites.net/api/check-db') 
      .then((response) => response.json())
      .then((data) => setConnectionMessage(data.message))
      .catch((error) => setConnectionMessage('Connection failed'));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Mongo</h1>

      <div className="connection-status">
        <p>MongoDB Connection Status: {connectionMessage}</p>
      </div>
    </>
  );
}

export default App;
