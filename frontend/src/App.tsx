import React, { useEffect, useState } from 'react';
import './App.css';
import Todo, { TodoType } from './Todo';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([
    {id: '1', title: 'First todo', description: 'This is the first todo item'},
    {id: '2', title: 'Second todo', description: 'This is the second todo item'},
  ]);
  const [newTodo, setNewTodo] = useState<TodoType>({id: '', title: '', description: ''});

  // Initially fetch todo
  useEffect(() => {
    // Fetching logic here
  }, []);

  const addTodo = (todo: TodoType) => {
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo({id: '', title: '', description: ''});
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({...newTodo, [event.target.name]: event.target.value});
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" value={newTodo.id} onChange={handleChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={newTodo.title} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={newTodo.description} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default App;