import { combineReducers } from "redux";
import { favReducer as favs } from "./favReducer";

export default combineReducers({
  favs,
});
