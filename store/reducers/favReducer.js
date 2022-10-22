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
      return state.filter((fav) => fav.id !== action.payload.id);

    case types.SAVE_FAVORITES:
      localStorage.setItem("favs-MS", JSON.stringify(state));
      return state;

    case types.GET_FAVORITES:
      const localFavs = JSON.parse(localStorage.getItem("favs-MS"));
      if (localFavs) {
        return localFavs;
      }
      return state;

    default:
      return state;
  }
};
