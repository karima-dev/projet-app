import { combineReducers } from "redux";
import empruntReducer from "../containers/InfoLivre/reducer";

import livreReducer from "../containers/ListLivres/reducer";

const rootReducer = combineReducers({
  lelivre: livreReducer,
  lemprunt: empruntReducer,
});

export default rootReducer;
