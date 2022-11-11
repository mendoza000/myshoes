import { types } from "@store/types";

const initialState = [
  /* 
  {
    id: '',
    title: '',
    description: '',
    image: '',
    price: 0,
    size: 42
  }
  */
];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD:
      return [...state, action.payload];

    case types.CART_REMOVE:
      let y = state.filter((e) => e.id !== action.payload.id);
      return y;

    case types.CART_CLEAR:
      return [];

    case types.CART_GET:
      let z = JSON.parse(localStorage.getItem("cart"));
      if (z === null) return state;
      else return z;

    case types.CART_SAVE:
      localStorage.setItem("cart", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
