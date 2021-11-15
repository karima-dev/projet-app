import { Livre } from "../../types";
import { ActionsTypes } from "./constants";

const requestLivres = () => {
  return {
    type: ActionsTypes.REQUEST_LIVRES_LIST,
  };
};
const requestLivresSuccess = (payload: Livre[]) => {
  return {
    type: ActionsTypes.REQUEST_LIVRES_LIST_SUCCESS,
    payload,
  };
};
const requestLivresError = () => {
  return {
    type: ActionsTypes.REQUEST_LIVRES_LIST_ERROR,
  };
};

const setSelectedLivre = (payload: {}) => {
  return {
    type: ActionsTypes.SET_SELECTED_LIVRE,
    payload,
  };
};

export {
  requestLivres,
  requestLivresSuccess,
  requestLivresError,
  setSelectedLivre,
};
