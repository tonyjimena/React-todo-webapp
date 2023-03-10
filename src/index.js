import React, { useReducer, useEffect, useState } from 'react';
import { render } from 'react-dom';

import TodoInput from './components/TodoInput';
import TodoCard from './components/TodoCard';
import ClearButton from './components/ClearButton';

import './style.css';

import { getTodos } from './repositories/todosRepository';

import { todoReducer } from './stateManager/reducer';

const Todo = () => {
  const [data, setData] = useState([{ id: 0 }]);
  const [todos, dispatch] = useReducer(todoReducer, []);


  useEffect(() => {

    getTodos().then((data) => {
      dispatch({
        type: 'SET_TODOS',
        todos: data,
      });
    }).catch(err => console.error(err))
      .finally(console.log("loaded"))

    return () => { }

  }, []);

  return (
    <>
      <TodoInput dispatch={dispatch} />
      <div className="column-container">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>

      <ClearButton dispatch={dispatch} />
    </>
  );
};

render(<Todo />, document.getElementById('root'));
