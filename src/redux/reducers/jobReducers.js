import merge from 'lodash-es/merge';
// import assign from 'lodash-es/assign';
// import get from 'lodash-es/get';
// import set from 'lodash-es/set';
import * as ActionTypes from '../actionTypes';

const jobReducers = (state = {}, action = {}) => {
  switch (action.type) {
    case ActionTypes.SET_JOB_RESULTS: {
      return merge({}, state, {
        jobResults: action.payload,
      });
    }
    default:
      return state;
  }
};

export default jobReducers;
