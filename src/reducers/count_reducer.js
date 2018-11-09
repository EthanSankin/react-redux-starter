import { ADD_TO_COUNTER } from "../actions";

const countReducer = (state = 0, action) => {
    switch (action.type) {
      case ADD_TO_COUNTER :
        return state + 1;
      default:
        return state
    }
  }

export default countReducer;