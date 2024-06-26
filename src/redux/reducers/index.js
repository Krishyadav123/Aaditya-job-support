import ThemeOptions from "./ThemeOptions";
import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import backdrops from "./backdrops";
import user from "./users";
import seller from "./sellers";
import game from "./game";
import role from "./roles";
import dispute from "./dispute";
const reducers = combineReducers({
  auth,
  message,
  backdrops,
  ThemeOptions,
  user,
  seller,
  game,
  role,
  dispute,
});

export default reducers;
