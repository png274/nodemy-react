import { UPDATE_COUNT, UPDATE, CHANGE_USER_NAME, LOGIN } from "./actionName";
import { getTask } from '../services/task';

const actionCreator = {
  updateCount: (count) => dispatch => {
    dispatch({
      type: UPDATE_COUNT,
      payload: { count }
    })
  },
  changeUserName: () => {
    return dispatch => {
      dispatch({
        type: CHANGE_USER_NAME
      })
    };
  },
  update: () => dispatch => { dispatch({ type: UPDATE }) },
  fetchData: () => async dispatch => {
    const result = await getTask();
    dispatch({
      type: 'FETCH',
      payload: {
        data: result,
      }
    })
  },
  loginAction: (token) => (dispatch) => { fetch('/me'); return ({ type: LOGIN, payload: { token } }) }

};

export default actionCreator;