import { useEffect, useState } from "react";
import { NavItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomAccordion from "../../components/CustomAccordion";
import CustomButton from "../../components/CustomButton";
import { CODE } from "../../constants";
import { requestEmprunts, requestRemove, requestUpdate, requestUpdateRetour, requestValidateEmprunt, setSelectedEmprunt } from "../InfoLivre/actions";
import { makeSelectEmprunt, makeSelectId } from "../InfoLivre/selectors";
import { EmpruntFormData } from "../InfoLivre/types";

const empruntState = createStructuredSelector({
  listLecture: makeSelectEmprunt(),
  idEmprunt:makeSelectId(),
   
});

const LectureList = () => {
  var etat2="valider"
  const dispatch = useDispatch();
  dispatch(requestEmprunts());
  const { listLecture } = useSelector(empruntState);
  const tab = Array.from(listLecture);
  const [list, setList] = useState(tab);
  const [etat, setEtat] = useState("valider");
  const [codeValue, setCodeValue] = useState("");
  const [erreur, setErreur] = useState("");

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setCodeValue(e.target.value);
  }
  const handleclick=(e:any)=>{

    e.preventDefault();
    const emprunt=tab?.filter((item) => item.id.includes(e.target.name));

    switch(e.target.id) {
      case "Valider" :
        if(!codeValue){
          setErreur("Merci de saisir le code confidentiel");
         }
         else if(Number(codeValue)===CODE){

 dispatch(setSelectedEmprunt(emprunt));
      dispatch(requestValidateEmprunt());
      setErreur("");
  setCodeValue("");
         }
         else{
          setErreur("Cadre réservé à l'administration");
          setCodeValue("");
        }
        break;
        case "Retourner":
          if(!codeValue){
            setErreur("Merci de saisir le code confidentiel");
           }
           else if(Number(codeValue)===CODE){
   
   dispatch(setSelectedEmprunt(emprunt));
   dispatch(requestUpdateRetour());
    
   dispatch(requestRemove());
   setErreur("");
   setCodeValue("");
           }
           else{
            setErreur("Cadre réservé à l'administration");
            setCodeValue("");
          }
          break;
          default:
            break;
}}
  useEffect(() => {
    setList(tab?.filter((item) => item.moyen.includes("emprunt")));
  }, [listLecture]);
const affiche=(item:any,index:any)=>{
  if(item.etatemprunt==="en cours"){
     
    etat2="Retourner";
    
  }
  else {
     
    etat2="Valider";
    
  }
  return (
    <CustomAccordion
    eventkey={index.toString()}
    header={item.nameUser}
    title={item.livre[0].titre}
    ean={item.livre[0].ean}
    emplacement={item.livre[0].emplacement}
    nombre={item.livre[0].nbre}
    dateRetour={item.dateRetour}
    name={item.id}
    onChange={handleChange}
    erreur={erreur}
    value={codeValue}
    id={etat2}
    text={etat2}
    onClick={handleclick}
  />
  )
}
  return (
    <>
      {list.map((item: any, index) => 
         affiche(item,index))
       
        
         
                 
      }
       
    </>
  );
};
export default LectureList;
