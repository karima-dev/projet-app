import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomAccordion from "../../components/CustomAccordion";
import CustomRecherche from "../../components/CustomRecherche";
import { CODE } from "../../constants";
import { requestEmprunts, requestRemove, requestUpdateRetour, requestValidateEmprunt, setSelectedEmprunt } from "../InfoLivre/actions";
import { makeSelectEmprunt, makeSelectId } from "../InfoLivre/selectors";
import "./index.css";
const empruntState = createStructuredSelector({
  listLecture: makeSelectEmprunt(),
  idEmprunt: makeSelectId(),

});

const LectureList = () => {
     const dispatch = useDispatch();
     const [valeur,setValeur]=useState("");
     if(!valeur){
  dispatch(requestEmprunts());
     }
  const { listLecture } = useSelector(empruntState);
  const tab = Array.from(listLecture);
  const [list, setList] = useState(tab);
  const [etat, setEtat] = useState("valider");
  const [codeValue, setCodeValue] = useState("");
  const [erreur, setErreur] = useState("");
  const [listencours, setListencours] = useState(tab);
  const [listouvert, setListouvert] = useState(tab);
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name != "recherche"){
    setCodeValue(e.target.value);
  }
  else if (e.target.name === "recherche") 
    {  
      setValeur(e.target.value);
   if(!valeur){
    setListencours(list?.filter((item) => item.moyen.includes("emprunt") && item.etatemprunt.includes("en cours")));
    setListouvert(list?.filter((item) => item.moyen.includes("emprunt") && item.etatemprunt.includes("ouvert")));
     
   }
   else {
      setListencours(list?.filter((item) => item.cinUser.includes(valeur) && item.etatemprunt.includes("en cours")));
      setListouvert(list?.filter((item) => item.cinUser.includes(valeur) && item.etatemprunt.includes("ouvert")));
      console.log("list",list);     

      console.log("list cours",listencours);
    console.log("list ouvert",listouvert);     
     
     } }
     
}
  const handleclick = (e: any) => {

    e.preventDefault();
    const emprunt = tab?.filter((item) => item.id.includes(e.target.name));

    switch (e.target.id) {
      case "Valider":
        if (!codeValue) {
          setErreur("Merci de saisir le code confidentiel");
        }
        else if (Number(codeValue) === CODE) {

          dispatch(setSelectedEmprunt(emprunt));
          dispatch(requestValidateEmprunt());
          setErreur("");
          setCodeValue("");
        }
        else {
          setErreur("Cadre réservé à l'administration");
          setCodeValue("");
        }
        break;
      case "Retourner":
        if (!codeValue) {
          setErreur("Merci de saisir le code confidentiel");
        }
        else if (Number(codeValue) === CODE) {

          dispatch(setSelectedEmprunt(emprunt));
          dispatch(requestUpdateRetour());

          dispatch(requestRemove());
          setErreur("");
          setCodeValue("");
        }
        else {
          setErreur("Cadre réservé à l'administration");
          setCodeValue("");
        }
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    setList(tab?.filter((item) => item.moyen.includes("emprunt")));
    setListencours(list?.filter((item) => item.moyen.includes("emprunt") && item.etatemprunt.includes("en cours")));
    setListouvert(list?.filter((item) => item.moyen.includes("emprunt") && item.etatemprunt.includes("ouvert")));
  }, [listLecture]);
      
  return (
    <>
          <CustomRecherche name="recherche" type="text"  placeholder="Recherche par nom" onChange={handleChange}/>

     <Container>
        <Row>
          
          <Col><h5>Liste des emprunts à valider</h5></Col>
          <Col><h5>Liste des emprunts en cours</h5></Col>
          </Row>
           </Container>
           <Container>
           <div className="div1">
      {listouvert.map((item: any, index) =>
      
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
        id="Valider"
        text="Valider"
        onClick={handleclick}
      />
        
        
      )}
       </div>
       <div className="div2">
      {listencours.map((item: any, index) =>
        
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
        id="Retourner"
        text="Retourner"
        onClick={handleclick}
      />
         
       
      )}
      </div>
      </Container>
     </>
  );
};
export default LectureList;
