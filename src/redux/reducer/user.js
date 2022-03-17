import { LOGIN, UPDATE } from '../actionName';
const initialState = {
  username: 'User name',
  isLogin: false,
  token: '',
  listCharacter: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  const payload = action.payload;
  switch (action.type) {
    case LOGIN:
      newState.token = payload.token;
      newState.isLogin = true;
      return newState;
    case UPDATE:
      newState.username = newState.username.split('').reverse().join('');
      return newState;
    case 'FETCH':
      console.log(action, 'action here');
      return newState;
    default:
      return { ...state, ...action.payload };
  }
}

export default reducer;