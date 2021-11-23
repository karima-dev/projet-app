import { takeLatest, call, put } from "redux-saga/effects";
import { Livre } from "../../types";
import { makeRequest } from "../../utils/request";
import { BACK_URL } from "../../variables";
import { LivreResponse } from "./types";
import { requestLivresError, requestLivresSuccess } from "./actions";
import { ActionsTypes } from "./constants";

function* livreSaga() {
  yield takeLatest(ActionsTypes.REQUEST_LIVRES_LIST, requestListLivres);
 
}
function* requestListLivres() {
  const options = {
    method: "GET",
    url: `${BACK_URL}livres/all`,
    responseType: "json",
  };
  try {
    const response: LivreResponse = yield call(makeRequest, options);

    yield put(requestLivresSuccess(response.data));
  } catch (err) {
    // yield put(requestUsersError());
  }
}
 

export default livreSaga;
