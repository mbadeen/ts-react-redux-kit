import { combineReducers } from 'redux';

// interface initialState {
//   undefined: undefined;
// }

const testReducer = (state = {}, action: string) => {
  return state;
};

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
