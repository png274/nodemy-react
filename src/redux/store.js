import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk'
import userReducer from './reducer/user';
import countReducer from './reducer/count';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
})
export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);