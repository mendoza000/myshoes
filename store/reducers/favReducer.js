import { types } from "store/types";

const initialState = [
  /* 
  {
    id: "1",
    name: "Air force 1",
    price: 130
  }
  */
];

export const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FAVORITE:
      return [...state, action.payload];

    case types.REMOVE_FAVORITE:
      return state.filter((fav) => fav.id !== action.payload);

    default:
      return state;
  }
};
