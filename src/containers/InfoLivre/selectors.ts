import { GlobalState, Livre } from "../../types";
import { EmpruntFormData, EmpruntState } from "./types";
import { createSelector } from "reselect";
import _ from "lodash";

const selectEmpruntDomain = (globalState: GlobalState): EmpruntState =>
  globalState.lemprunt;

 

const makeSelectError = () =>
  createSelector(selectEmpruntDomain, (empruntState: EmpruntState) =>
    _.get(empruntState, "error", "")
  );

const makeSelectErrorMessage = () =>
  createSelector(selectEmpruntDomain, (empruntState: EmpruntState) =>
    _.get(empruntState, "errorMessage", "")
  );
  const makeSelectId= () =>
  createSelector(selectEmpruntDomain, (empruntState: EmpruntState) =>
    _.get(empruntState, "id", "")
  );
 
  const makeSelectFormData = () =>
  createSelector(
    selectEmpruntDomain,
    (empruntState: EmpruntState): EmpruntFormData =>
      _.get(empruntState, "formData", {
        id:null,
        nameUser: null,
    cinUser: null,
    dateEmprunt: null,
    dateRetour: null,
    moyen: null,
    etatemprunt: null,
    livre:null,
      }) as EmpruntFormData
  );
   
  const makeSelectEmprunt = () =>
  createSelector(
    selectEmpruntDomain,
    (empruntState: EmpruntState) => _.get(empruntState, "formData", []) as EmpruntFormData[]
  );
   
export {
  makeSelectErrorMessage,
  makeSelectError,
   makeSelectFormData,
   makeSelectEmprunt,
   makeSelectId,
 };
