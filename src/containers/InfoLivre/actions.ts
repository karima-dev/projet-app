import { Livre } from "../../types";
import { ActionsTypes } from "./constants";
import { EmpruntFormData } from "./types";

const requestEmprunts = () => {
  return {
    type: ActionsTypes.REQUEST_EMPRUNTS_LIST,
  };
};
const requestLire = () => {
  return {
    type: ActionsTypes.REQUEST_LIRE,
  };
};
const requestEmprunter = () => {
  return {
    type: ActionsTypes.REQUEST_EMPRUNTER,
  };
};
const requestEmpruntsSuccess = (payload: Livre[]) => {
  return {
    type: ActionsTypes.REQUEST_EMPRUNTS_LIST_SUCCESS,
    payload,
  };
};
const requestLiresSuccess = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_LIRE_SUCCESS,
    payload,
  };
};

const requestEmpruntsError = () => {
  return {
    type: ActionsTypes.REQUEST_EMPRUNTS_LIST_ERROR,
  };
};

const setFormData = (payload: {}) => {
  return {
    type: ActionsTypes.SET_FORM_DATA,
    payload,
  };
};
const requestUpdate = () => {
  return {
    type: ActionsTypes.REQUEST_UPDATE,
  };
};
const requestValidateEmprunt = () => {
  return {
    type: ActionsTypes.REQUEST_VALIDATE,
  };
};
const requestUpdateRetour = () => {
  return {
    type: ActionsTypes.REQUEST_UPDATE_RETOUR,
  };
};
const setSelectedEmprunt = (payload: EmpruntFormData[]) => {
  return {
    type: ActionsTypes.SET_SELECTED_EMPRUNT,
    payload,
  };
};

const requestRemove = () => {
  return {
    type: ActionsTypes.REQUEST_REMOVE,
  };
};

export {
  requestEmprunts,
  requestEmpruntsSuccess,
  requestEmpruntsError,
  setFormData,
  requestEmprunter,
  requestLire,
  requestLiresSuccess,
  requestUpdate,
  requestUpdateRetour,
  setSelectedEmprunt,
  requestRemove,
  requestValidateEmprunt,
};
