import { nanoid } from 'nanoid';
import './App.css';
import Board from './components/Board/Board';

interface Task {
  id: string;
  title?: string;
  done?: boolean;
}

const tasks = [
  { id: nanoid(), title: 'Тестовое задание', done: true },
  { id: nanoid(), title: 'Прекрасный код', done: false },
  { id: nanoid(), title: 'Покрытие тестами', done: false },
];

function App() {
  return (
    <div className='App'>
      <div className='content-container'>
        <h1 className='title'>todos</h1>
        <Board tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
