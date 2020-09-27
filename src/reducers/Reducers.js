import { ADD_WORKER } from "../actions/Actions";

export const workReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_WORKER:
      return [...state, [action.payload]];
    default:
      console.warn(`Brak akcji typu:${action.type}`);
      return state;
  }
};
