import react from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <Todo/>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
