let idx = 0;

const GET_TODOS = "GET_TODOS";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHECK_TODO = "CHECK_TODO";
const SET_DETAIL = "SET_DETAIL";
const MODIFY_TODOS = "MODIFY_TODOS";

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

export const setDetail = (id) => {
  return { type: SET_DETAIL, id };
};

export const modifyTodos = (value) => {
  return { type: MODIFY_TODOS, value };
};

const initialState = {
  todos: [
    { id: 1000, text: "tureTest", state: true },
    { id: 1001, text: "falseTest", state: false },
  ],
  focus: {},
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
  if (action.type === SET_DETAIL) {
    const obj = state.todos.find((v) => v.id === action.id);
    return { ...state, focus: obj };
  }
  if (action.type === MODIFY_TODOS) {
    const arr = [...state.todos];
    const modify = () => {
      arr.forEach((v) => {
        if (v.id === state.focus.id) v.text = action.value;
      });
      return arr;
    };
    return {
      ...state,
      todos: modify(),
    };
  }

  return state;
};

export default reducer;
