const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return action.name.length
        ? [
            ...state,
            {
              id: state.length
                ? Math.max(...state.map((todo) => todo.id)) + 1
                : 0,
              name: action.name,
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
