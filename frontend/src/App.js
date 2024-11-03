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
        <h1>Cloud, Microservizi e Scalabilità - Classe 5DS Informatica</h1>
        <div className="features-container">
          <table className="features-table">
            <thead>
              <tr>
                <th>Titolo</th>
                <th>Caratteristica</th>
              </tr>
            </thead>
            <tbody>
              {info && info.map(item => (
                <tr key={item.id}>
                  <td>{item.titolo}</td>
                  <td>{item.caratteristica}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );

  
}

export default App;
