const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = () => {
  return { type: OPEN_MODAL };
};
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};

const initialState = {
  isModal: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      isModal: true,
    };
  }
  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      isModal: false,
    };
  }

  return state;
};

export default reducer;
