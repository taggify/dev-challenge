import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchData().then(data => {
      setData(data);
    });
  }, []);

  return (
    < div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data ? data.message : 'Loading...'}
        </p>
      </header>
    </div >
  );
}

export default App;
