import { DECREASE, INCREASE } from "./actionName";

const initialState = {
  username: 'User name',
  count: 0,
  isLogin: false,
};

// action = {
//   type: 'adsf',
//   payload: {}
// }
const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case DECREASE:
      newState.count = newState.count - 1;
      return newState;
    case INCREASE:
      newState.count = newState.count + 1;
      return newState;
    default:
      return { ...state, ...action.payload };
  }
}

export default reducer;