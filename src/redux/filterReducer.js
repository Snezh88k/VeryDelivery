import { FILTER } from "./types";

const initialState = {
  list: ["1", "Moloko i zica"],
};

export const ListOfExercisesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        list: [action.data],
      };
    default:
      return state;
  }
};
