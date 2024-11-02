import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [info, setInfo] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => setInfo(data))
  }, [])

  return (
    <div className="App">
    <header className="App-header">
      <h1>Cloud, Microservizi e Scalabilità - TEST</h1>
      <h2>Classe 5DS</h2>
      <div className="features-container">
        {info && info.map(item => (
          <div key={item.id} className="feature-card">
            <h3>{item.titolo}</h3>
            <p>{item.caratteristica}</p>
          </div>
        ))}
      </div>
    </header>
</div>

  );
}

export default App;
