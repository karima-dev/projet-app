import { GlobalState, Livre } from "../../types";
import { LivreState } from "./types";
import { createSelector } from "reselect";
import _ from "lodash";

const selectLivreDomain = (globalState: GlobalState): LivreState =>
  globalState.lelivre;

const makeSelectError = () =>
  createSelector(selectLivreDomain, (livreState: LivreState) =>
    _.get(livreState, "error", "")
  );

const makeSelectLivres = () =>
  createSelector(
    selectLivreDomain,
    (livreState: LivreState): Livre[] =>
      _.get(livreState, "livres", []) as Livre[]
  );
const makeSelectedLivre = () =>
  createSelector(
    selectLivreDomain,
    (livreState: LivreState) =>
      _.get(livreState, "selectedLivre", []) as Livre[]
  );

export { makeSelectLivres, makeSelectError, makeSelectedLivre };
