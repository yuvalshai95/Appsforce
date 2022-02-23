import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { userReducer } from './user/user.reducer.js'

const rootReducer = combineReducers({
  userModule: userReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
