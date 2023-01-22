import React, { useEffect, useState } from 'react';
// import { response } from '../../app';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return;
  <div className="App">
    <h4>backendData</h4>
  </div>;
}

export default App;
