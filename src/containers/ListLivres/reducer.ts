import { ActionsTypes } from "./constants";
import { LivreState } from "./types";

const initialState: LivreState = {
  loading: true,
  error: false,
  livres: null,
  selectedLivre: null,
};

const livreReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_LIVRES_LIST_SUCCESS:
      return {
        ...state,
        livres: action.payload,
        loading: false,
      };
    case ActionsTypes.REQUEST_LIVRES_LIST_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case ActionsTypes.SET_SELECTED_LIVRE:
      return {
        ...state,
        selectedLivre: action.payload,
      };

    default:
      return state;
  }
};

export default livreReducer;
