import React from 'react';
import './App.css';

export type TodoType = {
  id: string;
  title: string;
  description: string;
}

function Todo({ id, title, description }: TodoType) {
  return (
    <div className="todo" key={id}>
      <div className="todo-details">
        <p className="todo-title">{title}</p>
        <p className="todo-description">{description}</p>
      </div>
    </div>
  );
}

export default Todo;