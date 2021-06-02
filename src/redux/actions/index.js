import * as ActionTypes from '../actionTypes';

export function setJobResults(payload) {
  return { type: ActionTypes.SET_JOB_RESULTS, payload };
}
