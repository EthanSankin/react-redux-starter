// Action Types
export const ADD_TO_COUNTER = 'ADD_TO_COUNTER';

// Redux action creators
export const onAddToCounter = number => ({
  type: ADD_TO_COUNTER,
  payload: number,
});