import React, { useReducer } from 'react';
import { render } from 'react-dom';

import TodoInput from './components/TodoInput';
import TodoCard from './components/TodoCard';
import ClearButton from './components/ClearButton';

import './style.css';
import * as constants from './services/constants';

import { todoReducer } from './stateManager/reducer';

const initialState = [...constants.TODOS];

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

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
