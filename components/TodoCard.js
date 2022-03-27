import React from 'react';

export default function TodoCard({ todo, dispatch }) {
  function handleDeleteItem(el) {
    dispatch({ type: 'DELETE_ITEM', item: el });
  }

  function handleCheck(el) {
    dispatch({ type: 'CHECK_COMPLETE', item: el });
  }

  return (
    <div
      className={`column-item ${todo.complete ? 'completed' : null}`}
      key={todo.id}
    >
      <div className="flex-container">
        <div className="todo-name">{todo.name}</div>

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
