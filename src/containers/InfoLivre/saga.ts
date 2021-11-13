import { takeLatest, call, put, select, delay } from "redux-saga/effects";
import { Livre } from "../../types";
import { makeRequest } from "../../utils/request";
import { BACK_URL } from "../../variables";
import { EmpruntFormData, EmpruntResponse } from "./types";
import { requestEmpruntsSuccess, requestLiresSuccess } from "./actions";
import { ActionsTypes } from "./constants";
import { makeSelectEmprunt, makeSelectFormData } from "./selectors";

function* empruntSaga() {
  yield takeLatest(ActionsTypes.REQUEST_EMPRUNTER, requestPostEmprunt);
  yield takeLatest(ActionsTypes.REQUEST_LIRE, requestPostLire);
  yield takeLatest(ActionsTypes.REQUEST_UPDATE, requestPutUpdate);
  yield takeLatest(ActionsTypes.REQUEST_EMPRUNTS_LIST, requestListEmprunt);
  yield takeLatest(ActionsTypes.REQUEST_UPDATE_RETOUR, requestUpdateRetour);
  yield takeLatest(ActionsTypes.REQUEST_REMOVE, requestRemove);
  yield takeLatest(ActionsTypes.REQUEST_VALIDATE, requestValidate);
}
function* requestPostEmprunt() {
   
  const formData: EmpruntFormData = yield select(makeSelectFormData());
  const options = {
    method: "POST",
    url: `${BACK_URL}livres/decouvrir`,
    responseType: "json",
    data: {
      
      nameUser: formData.nameUser,
      cinUser: formData.cinUser,
      dateEmprunt: formData.dateEmprunt,
      dateRetour:formData.dateRetour,
      moyen:"emprunt",
      etatemprunt:"ouvert",
      livre:formData.livre,
    },
     
  };
  try {
    const response: EmpruntResponse = yield call(makeRequest, options);
     
  } catch (err) {
    console.log("catcher error", err);
  } 
}
function* requestPostLire() {
   console.log("saga");
   const formData: EmpruntFormData = yield select(makeSelectFormData());
  console.log(formData);
  const options = {
    method: "POST",
    url: `${BACK_URL}livres/decouvrir`,
    responseType: "json",
    data: {
      nameUser: formData.nameUser,
      cinUser: formData.cinUser,
      dateEmprunt: formData.dateEmprunt,
      dateRetour:formData.dateRetour,
      moyen:"lire",
      etatemprunt:"ouvert",
      livre:formData.livre,
    },
     
  };
  try {
    console.log("key");
    const response: EmpruntResponse = yield call(makeRequest, options);
    console.log("key",response.data.data.form)
    yield put(requestLiresSuccess(response.data.data.form));
    console.log("key",response.data)
  } catch (err) {
    console.log("catcher error", err);
  } 
}
function* requestPutUpdate() {
  yield delay(6000)
  console.log("requestPutUpdate");
  const formData: EmpruntFormData = yield select(makeSelectFormData());
  console.log("saga1111111",formData.id)
 const options = {
   method: "PUT",
   url: `${BACK_URL}livres/decouvrir`,
   responseType: "json",
   data: {
      id:formData.livre[0].id,
     
     idEmprunt:formData.id,
   },
   
 };
 try {
    
   const response: EmpruntResponse = yield call(makeRequest, options);
   console.log("saga",formData.livre[0].id)
 } catch (err) {
   console.log("catcher error", err);
 } 
}
function* requestUpdateRetour() {
   
  const formData: EmpruntFormData[] = yield select(makeSelectEmprunt());
  
 const options = {
   method: "PUT",
   url: `${BACK_URL}livres/lecture`,
   responseType: "json",
   data: {
      id:formData[0].livre[0].id,
      
   },
    
 };
 try {
    
   const response: EmpruntResponse = yield call(makeRequest, options);
  // console.log(response.data.data.thekey)
 } catch (err) {
   console.log("catcher error", err);
 } 
}
function* requestValidate() {
   
  const formData: EmpruntFormData[] = yield select(makeSelectEmprunt());
  
 const options = {
   method: "PUT",
   url: `${BACK_URL}livres/decouvrir`,
   responseType: "json",
   data: {
      id:formData[0].livre[0].id,
      idEmprunt:formData[0].id,
   },
    
 };
 try {
    
   const response: EmpruntResponse = yield call(makeRequest, options);
  // console.log(response.data.data.thekey)
 } catch (err) {
   console.log("catcher error", err);
 } 
}
function* requestRemove() {
   
  const formData: EmpruntFormData[] = yield select(makeSelectEmprunt());
  console.log("remove",formData[0].id)
 const options = {
   method: "DELETE",
   url: `${BACK_URL}livres/emprunts`,
   responseType: "json",
   data: {
      id:formData[0].id,
     
   },
    
 };
 try {
    
   const response: EmpruntResponse = yield call(makeRequest, options);
  // console.log(response.data.data.thekey)
 } catch (err) {
   console.log("catcher error", err);
 } 
}
function* requestListEmprunt() {
   
  const options = {
    method: "GET",
    url: `${BACK_URL}livres/emprunts/all`,
    responseType: "json",
  };
  try {
    const response: EmpruntResponse = yield call(makeRequest, options);
    
  yield put(requestEmpruntsSuccess(response.data));
  } catch (err) {
   // yield put(requestUsersError());
  }
}
export default empruntSaga;
 

