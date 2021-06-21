const GET_DETAIL = "GET_DETAIL";
const SET_DETAIL = "SET_DETAIL";

export const getDetail = () => {
  return { type: GET_DETAIL };
};
export const setDetail = () => {
  return { type: SET_DETAIL };
};

const initialState = {
  focus: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === GET_DETAIL) {
    return { ...state };
  }
  if (action.type === SET_DETAIL) {
    return { ...state };
  }
  return state;
};

export default reducer;
