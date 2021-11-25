import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomAccordion from "../../components/CustomAccordion";
import CustomRecherche from "../../components/CustomRecherche";
import { CODE } from "../../constants";
import {
  requestEmprunts,
  requestRemove,
  requestUpdateRetour,
  requestValidateEmprunt,
  setSelectedEmprunt,
} from "../InfoLivre/actions";
import { makeSelectEmprunt, makeSelectId } from "../InfoLivre/selectors";
import "./index.css";
const empruntState = createStructuredSelector({
  listLecture: makeSelectEmprunt(),
  idEmprunt: makeSelectId(),
});

const LectureList = () => {
  const dispatch = useDispatch();
  const [valeur, setValeur] = useState("");
  if (!valeur) {

    dispatch(requestEmprunts());
  }
  const { listLecture } = useSelector(empruntState);
  const tab = Array.from(listLecture);
  const [list, setList] = useState(tab);
  const [codeValue, setCodeValue] = useState("");
   const [msgOuvert, setMsgOuvert] = useState([""]);
  const [msgEncours, setMsgEncours] = useState([""]);
  const [listencours, setListencours] = useState(tab);
  const [listouvert, setListouvert] = useState(tab);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name != "recherche") {
      setCodeValue(e.target.value);
      setMsgOuvert(["",""]);
      setMsgEncours(["",""]);

    } else if (e.target.name === "recherche") {
      setValeur(e.target.value);
      setMsgOuvert(["",""]);
      setMsgEncours(["",""]);
      

        setListencours(
          list?.filter(
            (item) =>
              item.cinUser.includes(valeur) &&
              item.etatemprunt.includes("en cours")
          )
        );
        setListouvert(
          list?.filter(
            (item) =>
              item.cinUser.includes(valeur) &&
              item.etatemprunt.includes("ouvert")
          )
        );
      
    }
  };
  const handleclick = (e: any) => {
    e.preventDefault();
    const emprunt = tab?.filter((item) => item.id.includes(e.target.name));

    switch (e.target.id) {
      case "Valider":
        if (!codeValue) {
           setMsgOuvert(["","Merci de saisir le code confidentiel"]);
        } else if (Number(codeValue) === CODE) {
          dispatch(setSelectedEmprunt(emprunt));
          dispatch(requestValidateEmprunt());
           setMsgOuvert(["Demande validée avec succès",""]);

          setCodeValue("");
          setValeur("");
        } else {
           setMsgOuvert(["","Cadre réservé à l'administration"]);

          setCodeValue("");
        }
        break;
      case "Retourner":
        if (!codeValue) {
           setMsgEncours(["","Merci de saisir le code confidentiel"]);
        } else if (Number(codeValue) === CODE) {
          dispatch(setSelectedEmprunt(emprunt));
          dispatch(requestUpdateRetour());

          dispatch(requestRemove());
           setMsgEncours(["Livre retourné avec succès",""]);
          setCodeValue("");
          setValeur("");
        } else {
           setMsgEncours(["","Cadre réservé à l'administration"]);
          setCodeValue("");
        }
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    setList(tab?.filter((item) => item.moyen.includes("emprunt")));
    setListencours(
      list?.filter(
        (item) =>
          item.moyen.includes("emprunt") &&
          item.etatemprunt.includes("en cours")
      )
    );
    setListouvert(
      list?.filter(
        (item) =>
          item.moyen.includes("emprunt") && item.etatemprunt.includes("ouvert")
      )
    );
  }, [listLecture]);

  return (

    <>

      <CustomRecherche
        name="recherche"
        type="text"
        placeholder="Recherche par cin"
        onChange={handleChange}
        value={valeur}
      />
      <br></br>
      <Container>
        <Row>
          <Col>
            <h5>Liste des emprunts à valider{"\u00a0" + "\u00a0" + "\u00a0" + "\u00a0"} {<span className="erreur">{msgOuvert[1]}</span>}{<span className="succes">{msgOuvert[0]}</span>}</h5>
          </Col>
          <Col>
            <h5>Liste des emprunts en cours{"\u00a0" + "\u00a0" + "\u00a0" + "\u00a0"} {<span className="erreur">{msgEncours[1]}</span>}{<span className="succes">{msgEncours[0]}</span>}</h5>
          </Col>
        </Row>

      </Container>
      <Container>
        <div className="div1">

          {listouvert.map((item: any, index) => (
            <CustomAccordion
              eventkey={index.toString()}
              header={item.nameUser}
              title={item.livre[0].titre}
              ean={item.livre[0].ean}
              cin={item.cinUser}
              emplacement={item.livre[0].emplacement}
              nombre={item.livre[0].nbre}
              dateRetour={item.dateRetour}
              name={item.id}
              onChange={handleChange}
              value={codeValue}
              id="Valider"
              text="Valider"
              onClick={handleclick}
            />
          ))

          }
        </div>
        <div className="div2">
          {listencours.map((item: any, index) => (

            <CustomAccordion
              eventkey={index.toString()}
              header={item.nameUser}
              title={item.livre[0].titre}
              ean={item.livre[0].ean}
              cin={item.cinUser}
              emplacement={item.livre[0].emplacement}
              nombre={item.livre[0].nbre}
              dateRetour={item.dateRetour}
              name={item.id}
              onChange={handleChange}
              value={codeValue}
              id="Retourner"
              text="Retourner"
              onClick={handleclick}
            />

          )
          )}
        </div>
      </Container>
    </>
  );
};
export default LectureList;
