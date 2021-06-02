import assign from 'lodash-es/assign';
import JobReducers from '../reducers/jobReducers';

const combineReducers = (reducers) => {
  const reducersList = Object.values(reducers);

  const combination = (state = {}, action) => {
    let nextState = { ...state };

    // Loop through all passed reducers and create new state
    reducersList.forEach((reducer) => {
      const newState = reducer(nextState, action);
      nextState = assign(nextState, newState);
    });

    return nextState;
  };

  return combination;
};

// export default global;

export default combineReducers({
  JobReducers,
});
