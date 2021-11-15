import { ActionsTypes } from "./constants";
import { EmpruntState } from "./types";
import { champsValue } from "./constants";
import { getDate } from "../../utils/request";
const initialState: EmpruntState = {
  error: false,
  errorMessage: "",
  formData: {
    id: "",
    nameUser: null,
    cinUser: null,
    dateEmprunt: new Date(),
    dateRetour: null,
    moyen: "null",
    etatemprunt: null,
    livre: [
      {
        auteur: "",
        date: "",
        id: "",
        src: "",
        titre: "",
        description: "",
        ean: "",
        emplacement: "",
        nbre: 0,
      },
    ],
  },
};

const empruntReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_EMPRUNTS_LIST_SUCCESS:
      return {
        ...state,
        formData: action.payload,
      };
    case ActionsTypes.REQUEST_EMPRUNTS_LIST_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    case ActionsTypes.SET_FORM_DATA:
      let formData = null;
      if (action.payload.name == champsValue.champnom.name) {
        formData = {
          ...state.formData,
          nameUser: action.payload.value,
          livre: action.payload.livre,
        };
        return { ...state, formData };
      }
      if (action.payload.name == champsValue.champcin.name) {
        formData = { ...state.formData, cinUser: action.payload.value };
        return { ...state, formData };
      }

      if (action.payload.name == champsValue.champdate.name) {
        formData = {
          ...state.formData,
          dateRetour: action.payload.value,
          dateEmprunt: getDate(),
        };
        return { ...state, formData };
      } else {
        formData = {
          ...state.formData,
          dateRetour: action.payload.value,
          dateEmprunt: getDate(),
        };
        return { ...state, formData };
      }
    case ActionsTypes.REQUEST_LIRE_SUCCESS:
      return {
        ...state,
        formData: action.payload,
      };

    case ActionsTypes.SET_SELECTED_EMPRUNT:
      return {
        ...state,
        formData: action.payload,
      };
    case ActionsTypes.SET_SELECTED_EMPRUNT_ID:
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
};

export default empruntReducer;
