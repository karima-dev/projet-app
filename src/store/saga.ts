import { fork } from "redux-saga/effects";
import empruntSaga from "../containers/InfoLivre/saga";
 import livreSaga from "../containers/ListLivres/saga";
function* rootSaga() {
  
  yield fork(livreSaga);
  yield fork(empruntSaga);
}

export default rootSaga;
