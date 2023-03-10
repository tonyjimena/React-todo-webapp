const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOS': {
      return action.todos
    }
    case 'ADD_TODO': {
      return action.todo.id
        ? [
            ...state,
            {
              id: action.todo.id,
              title: action.todo.title,
              complete: false,
            },
          ]
        : state;
    }
    case 'CHECK_COMPLETE': {
      state = state.map((el) =>
        el.id === action.item.id
          ? { ...action.item, complete: !action.item.complete }
          : el
      );
      return state;
    }
    case 'DELETE_ITEM': {
      return state.filter((item) => item != action.item);
    }
    case 'CLEAR_TODOS': {
      return [];
    }
    default: {
      return state;
    }
  }
};

export { todoReducer };
