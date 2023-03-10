import React from 'react';

import { deleteTodo, updateTodo } from '../repositories/todosRepository';


export default function TodoCard({ todo, dispatch }) {
  function handleDeleteItem(todo) {
    deleteTodo(todo.id).then(dispatch({ type: 'DELETE_ITEM', item: todo }))
  }

  function handleCheck(todo) {

    let todoUpdated = {
      title: todo.title,
      complete: !todo.complete
    }

    updateTodo(todo.id, todoUpdated).then((res) => {
      dispatch({ type: 'CHECK_COMPLETE', item: todo })
    })
  }

  return (
    <div
      className={`column-item ${todo.complete ? 'completed' : null}`}
      key={todo.id}
    >
      <div className="flex-container">
        <div className="todo-name">{todo.title}</div>

        <div onClick={() => handleDeleteItem(todo)} className="todo-delete">
          &times;
        </div>
      </div>
      <button className="todo-check" onClick={() => handleCheck(todo)}>
        Check
      </button>
    </div>
  );
}
