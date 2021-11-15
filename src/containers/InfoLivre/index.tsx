import CustomButton from "../../components/CustomButton";
import CustomLivre from "../../components/CustomLivre";
import CustomForms from "../../components/CustomForms";
import { createStructuredSelector } from "reselect";
import { makeSelectedLivre } from "../ListLivres/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { champsValue } from "./constants";
import { EventHandler, SyntheticEvent, useState } from "react";
import { requestEmprunter, requestLire, setFormData, requestUpdate } from "./actions";
import { makeSelectEmprunt, makeSelectFormData } from "./selectors";
import { nombreJours } from "../../utils/request";
import { WSAETIMEDOUT } from "constants";
import { watchFile } from "fs";

const LivreState = createStructuredSelector({
  selectedLivre: makeSelectedLivre(),
});
const empruntState = createStructuredSelector({
  formData: makeSelectFormData(),
  listInfo: makeSelectEmprunt(),
});

const InfoLivre = () => {
  const { selectedLivre } = useSelector(LivreState);
  const [dispo, setDispo] = useState("Disponible");
  var dispo2 = "dispo";
  if (selectedLivre[0].nbre === 0) {
    dispo2 = "non dispo";
  }
  const { formData } = useSelector(empruntState);
  const { listInfo } = useSelector(empruntState);
  const [etat, setEtat] = useState("");

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFormData({ name: e.target.name, value: e.target.value, livre: selectedLivre }));

  };

  const handleclick = (e: any) => {
    e.preventDefault();
    if (formData.nameUser == null || formData.cinUser == null || formData.dateRetour == null) {
      setEtat("erreur");


    }
    else if (nombreJours(formData.dateRetour, formData.dateEmprunt) > 5) {
      setEtat("erreur date sup");
    }
    else if (Date.parse(formData.dateRetour.toString()) < Date.parse(formData.dateEmprunt.toString())) {
      setEtat("erreur date");
    }
    else {
      if (e.target.name === "lire") {

        dispatch(requestLire());
        setEtat("lire clicked");


        dispatch(requestUpdate());
      }
      else if (e.target.name === "emprunter") {

        dispatch(requestEmprunter());
        setEtat("emprunt clicked");
      }
    }
  }
  const afficheMessage = () => {
    if (etat === "lire clicked") {
      return (
        <Alert key="1" variant="success">
          <h4>Bonne lecture!!!</h4>
          <span>vous trouverez votre livre à l'emplacement {selectedLivre[0].emplacement}</span>
        </Alert>)
    }
    else if (etat === "emprunt clicked") {
      return (
        <Alert key="1" variant="success">
          <h4>Votre demande est en cours de traitement</h4>
          <span>vous trouverez votre livre à l'emplacement {selectedLivre[0].emplacement}</span>
          <br></br>
          <span>Merci de vous présenter à l'acceuil pour valider votre demande</span>

        </Alert>)
    }
    else if (etat === "erreur") {
      return (
        <Alert key="1" variant="danger">
          <h6>Merci de saisir toutes les informations!!!</h6>


        </Alert>)
    }
    else if (etat === "erreur date") {
      return (
        <Alert key="1" variant="danger">
          <h6>Merci de saisir la bonne date!!!</h6>


        </Alert>)
    }
    else if (etat === "erreur date sup") {
      return (
        <Alert key="1" variant="danger">
          <h6>Un emprunt de plus de cinq jours n'est pas autorisé!!!</h6>


        </Alert>)
    }


  }

  return (
    <>

      <Container>
        {afficheMessage()}

        <Row>
          <Col>
            <CustomLivre
              src={selectedLivre[0].src}
              title={selectedLivre[0].titre}
              auteur={selectedLivre[0].auteur}
              date={selectedLivre[0].date}
              text={selectedLivre[0].description}
              disponibilite={dispo2}
            />
          </Col>
          <Col className="formpad">
            <CustomForms
              label={champsValue.champnom.label}
              type={champsValue.champnom.type}
              placeholder={champsValue.champnom.placeholder}
              name={champsValue.champnom.name}
              onChange={handleChange}
            />
            <CustomForms
              label={champsValue.champcin.label}
              type={champsValue.champcin.type}
              placeholder={champsValue.champcin.placeholder}
              name={champsValue.champcin.name}
              onChange={handleChange}
            />
            <CustomForms
              label={champsValue.champean.label}
              type={champsValue.champean.type}
              name={champsValue.champean.name}
              value={selectedLivre[0].ean}
              readOnly={true}
            />
            <CustomForms
              label={champsValue.champdate.label}
              type={champsValue.champdate.type}
              placeholder={champsValue.champdate.placeholder}
              name={champsValue.champdate.name}
              onChange={handleChange}
            />
            <CustomButton name="lire" text="Lire sur place" variant="secondary" onClick={handleclick}></CustomButton>

            <CustomButton name="emprunter" text="Emprunter" variant="secondary" onClick={handleclick}></CustomButton>

          </Col>
        </Row>
      </Container>

    </>
  );
};
export default InfoLivre;


