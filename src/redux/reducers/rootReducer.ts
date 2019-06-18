import { combineReducers } from 'redux';

const test = (state = {}, action: string) => {
  return state;
};

const rootReducer = combineReducers({
  test
});

export default rootReducer;
