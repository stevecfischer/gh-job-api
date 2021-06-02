import { createStore } from 'redux';
// import thunk from 'redux-thunk';
import combineReducers from './reducers';

// Add redux dev tools
// const composeEnhancers = (() => {
//   return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// })();
//
// const enhancer = composeEnhancers(applyMiddleware(thunk));

export default () => {
  const store = createStore(
    combineReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return { store };
};
