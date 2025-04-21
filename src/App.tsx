import './App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <div className='App'>
      <div className='content-container'>
        <h1 className='title'>todos</h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
