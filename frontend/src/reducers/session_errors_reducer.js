import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const nullErrors = [];

const SessionErrorsReducer = (state = nullErrors, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return nullErrors;
    default:
      return state;
  }
};


export default SessionErrorsReducer;
