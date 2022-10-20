import { types } from "@store/types";

export const cartAdd = (item) => {
  return {
    type: types.CART_ADD,
    payload: item,
  };
};

export const cartRemoveItem = (item) => {
  return {
    type: types.CART_REMOVE,
    payload: item.id,
  };
};

export const cartClear = () => {
  return {
    type: types.CART_CLEAR,
  };
};

export const cartGet = () => {
  return {
    type: types.CART_GET,
  };
};

export const cartSave = () => {
  return {
    type: types.CART_SAVE,
  };
};
