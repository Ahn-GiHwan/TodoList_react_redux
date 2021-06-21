let idx = 0;

const GET_TODOS = "GET_TODOS";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHECK_TODO = "CHECK_TODO";

export const getTodos = () => {
  return { type: GET_TODOS };
};

export const addTodo = (text) => {
  return { type: ADD_TODO, text };
};
export const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};
export const checkTodo = (id) => {
  return { type: CHECK_TODO, id };
};

const initialState = {
  todos: [
    { id: 1000, text: "tureTest", state: true },
    { id: 1001, text: "falseTest", state: false },
  ],
};

const reducer = (state = initialState, action) => {
  if (action.type === GET_TODOS) {
    return { ...state };
  }
  if (action.type === ADD_TODO) {
    const todo = { id: idx++, text: action.text, stata: false };
    return {
      ...state,
      todos: [...state.todos, todo],
    };
  }
  if (action.type === DELETE_TODO) {
    const arr = state.todos.filter((v) => v.id !== action.id);
    return {
      ...state,
      todos: arr,
    };
  }
  if (action.type === CHECK_TODO) {
    const arr = [...state.todos];
    const check = () => {
      arr.forEach((v) => {
        if (v.id === action.id) {
          v.state ? (v.state = false) : (v.state = true);
        }
      });
      return arr;
    };
    return {
      ...state,
      todos: check(),
    };
  }
  return state;
};

export default reducer;
