import { UPDATE_COUNT, UPDATE } from "../actionName";

const initialState = {
  value: 1,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case UPDATE:
      newState.value = state.value * 2;
      return { ...newState };
    case UPDATE_COUNT:
      return { ...newState, ...action.payload };
    default:
      return state;
  }
}

export default reducer;