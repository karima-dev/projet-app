export const champsValue = {
  default: {
    label: "default",
    type: "text",
    placeholder: "text",
    value: "text",
    name: "text",
  },
  champnom: {
    label: "Nom et prénom",
    type: "text",
    placeholder: "Votre nom",
    value: "",
    name: "nom",
  },
  champcin: {
    label: "N° CIN",
    type: "text",
    placeholder: "Votre cin",
    value: "",
    name: "cin",
  },
  champean: {
    label: "Ean",
    type: "text",
    placeholder: "",
    value: "",
    name: "ean",
  },
  champdate: {
    label: "Date retour",
    type: "date",
    placeholder: "",
    value: "",
    name: "date",
  },
};

export enum ActionsTypes {
  SET_FORM_DATA = "SET_FORM_DATA",
  REQUEST_EMPRUNTS_LIST = "REQUEST_EMPRUNTS_LIST",
  REQUEST_EMPRUNTS_LIST_SUCCESS = "REQUEST_EMPRUNTS_LIST_SUCCESS",
  REQUEST_EMPRUNTS_LIST_ERROR = "REQUEST_EMPRUNTS_LIST_ERROR",
  SET_SELECTED_EMPRUNT = "SET_SELECTED_EMPRUNT",
  REQUEST_LIRE = "REQUEST_LIRE",
  REQUEST_EMPRUNTER = "REQUEST_EMPRUNTER",
  REQUEST_LIRE_SUCCESS = "REQUEST_LIRE_SUCCESS",
  REQUEST_UPDATE = "REQUEST_UPDATE",
  REQUEST_UPDATE_RETOUR = "REQUEST_UPDATE_RETOUR",
  SET_SELECTED_EMPRUNT_ID = "SET_SELECTED_EMPRUNT_ID",
  REQUEST_REMOVE = "REQUEST_REMOVE",
  REQUEST_VALIDATE = "REQUEST_VALIDATE",
}
