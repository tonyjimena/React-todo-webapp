import React, { useRef } from 'react';

export default function TodoInput({ dispatch }) {
  const inputRef = useRef();

  function addTodo(event) {
    event.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      name: inputRef.current.value,
      complete: false,
    });
    inputRef.current.value = '';
  }

  return (
    <div className="todo-input">
      <form onSubmit={addTodo}>
        <input
          ref={inputRef}
          type="search"
          id="add-todo"
          placeholder="Add Todo..."
        />
      </form>
    </div>
  );
}
