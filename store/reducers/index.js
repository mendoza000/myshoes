import { combineReducers } from "redux";
import { favReducer as favs } from "./favReducer";
import { cartReducer as cart } from "./cartReducer";

export default combineReducers({
  favs,
  cart,
});
