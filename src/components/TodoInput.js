import React, { useRef } from 'react';

import { addTodo } from '../repositories/todosRepository';


export default function TodoInput({ dispatch }) {
  const inputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    let todo = {
      title: inputRef.current.value,
      complete: false,
    }

    addTodo(todo).then((res) => {

      dispatch({
        type: 'ADD_TODO',
        todo: { id: res.id, ...todo }
      });

      inputRef.current.value = '';
    })

  }

  return (
    <div className="todo-input">
      <form onSubmit={handleSubmit}>
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
