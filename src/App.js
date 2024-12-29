import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Result</h1>
        <button className='result-button' onClick={() => navigate('/result')}>View</button>
      </header>
    </div>
  );
}

export default App;
