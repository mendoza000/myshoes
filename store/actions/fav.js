import { types } from "store/types";

export const addFav = (item) => {
  return {
    type: types.ADD_FAVORITE,
    payload: item,
  };
};

export const removeFav = (item) => {
  return {
    type: types.REMOVE_FAVORITE,
    payload: item,
  };
};
