import CustomButton from "../../components/CustomButton";
import CustomLivre from "../../components/CustomLivre";
import CustomForms from "../../components/CustomForms";
import { createStructuredSelector } from "reselect";
import { makeSelectedLivre } from "../ListLivres/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { champsValue } from "./constants";
import { useState } from "react";
import {
  requestEmprunter,
  requestLire,
  setFormData,
  requestUpdate,
} from "./actions";
import { makeSelectEmprunt, makeSelectFormData } from "./selectors";
import { nombreJours } from "../../utils/request";
import { buttonProps } from "../../constants";
import "./index.css";
const LivreState = createStructuredSelector({
  selectedLivre: makeSelectedLivre(),
});
const empruntState = createStructuredSelector({
  formData: makeSelectFormData(),
  listInfo: makeSelectEmprunt(),
});

const InfoLivre = () => {
  const { selectedLivre } = useSelector(LivreState);
  var dispo = "Disponible";
  if (selectedLivre[0].nbre === 0) {
    dispo = "Non disponible";
  }
  const { formData } = useSelector(empruntState);
  const [etat, setEtat] = useState("");
  const [valeurnom, setValeurNom] = useState("");
  const [valeurcin, setValeurCin] = useState("");
  const [valeurdate, setValeurDate] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "nom":
        setValeurNom(e.target.value);
        break;
      case "cin":
        setValeurCin(e.target.value.toUpperCase());
        break;
      case "date":
        setValeurDate(e.target.value);
        break;
      default:
        break;
    }
    dispatch(
      setFormData({
        name: e.target.name,
        value: e.target.value,
        livre: selectedLivre,
      })
    );
  };

  const handleclick = (e: any) => {
    e.preventDefault();
    if (
      formData.nameUser == null ||
      formData.cinUser == null ||
      formData.dateRetour == null
    ) {
      setEtat("erreur");
    } else if (nombreJours(formData.dateRetour, formData.dateEmprunt) > 5) {
      setEtat("erreur date sup");
    } else if (
      Date.parse(formData.dateRetour.toString()) <
      Date.parse(formData.dateEmprunt.toString())
    ) {
      setEtat("erreur date");
    }

    else {
      if (e.target.name === "lire") {
        if (Date.parse(formData.dateRetour.toString()) ==
          Date.parse(formData.dateEmprunt.toString())) {
          dispatch(requestLire());
          setEtat("lire clicked");
          dispatch(requestUpdate());
        }
        else {
          setEtat("meme date");
        }

      } else if (e.target.name === "emprunter") {
        dispatch(requestEmprunter());
        setEtat("emprunt clicked");
      }
    }
    setValeurNom("");
    setValeurCin("");
    setValeurDate("");
  };
  const afficheMessage = () => {
     switch (etat) {
       case "lire clicked" :
        return (
          <Alert key="1" variant="success">
            <h4>Bonne lecture!!!</h4>
            <span>
              Vous trouverez votre livre à l'emplacement{" "}
              {selectedLivre[0].emplacement}
            </span>
          </Alert>
        )
        break;
     
     case "emprunt clicked":
      return (
        <Alert key="1" variant="success">
          <h4>Votre demande est en cours de traitement</h4>
          <span>
            Vous trouverez votre livre à l'emplacement{" "}
            {selectedLivre[0].emplacement}
          </span>
          <br></br>
          <span>
            Merci de vous présenter à l'acceuil pour valider votre demande
          </span>
        </Alert>
      )
      break;

      case "erreur" :
        return (
          <Alert key="1" variant="warning">
            <h6>Merci de saisir toutes les informations!!!</h6>
          </Alert>
        );
        break;
        case "erreur date" :
          return (
            <Alert key="1" variant="warning">
              <h6>Merci de saisir la bonne date!!!</h6>
            </Alert>
          );
          break;
        case "erreur date sup":
          return (
            <Alert key="1" variant="warning">
              <h6>Un emprunt de plus de cinq jours n'est pas autorisé!!!</h6>
            </Alert>
          );
          break;
           case "meme date":
            return (
              <Alert key="1" variant="warning">
                <h6>Pour lire sur place, Merci de choisir la date d'aujourd'hui!!!</h6>
              </Alert>
            ); 
            break;
            default:
              break;
     }
         
     
  };

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
              date={"Date de parution: " + selectedLivre[0].date}
              text={selectedLivre[0].description}
              disponibilite={dispo}
            />
          </Col>
          <Col className="formpad">
            <CustomForms
              label={champsValue.champnom.label}
              type={champsValue.champnom.type}
              placeholder={champsValue.champnom.placeholder}
              name={champsValue.champnom.name}
              onChange={handleChange}
              value={valeurnom}
            />
            <CustomForms
              label={champsValue.champcin.label}
              type={champsValue.champcin.type}
              placeholder={champsValue.champcin.placeholder}
              name={champsValue.champcin.name}
              onChange={handleChange}
              value={valeurcin}
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
              value={valeurdate}
            />
            <CustomButton
              name={buttonProps.lire.name}
              text={buttonProps.lire.text}
              variant={buttonProps.lire.variant}
              onClick={handleclick}
            ></CustomButton>

            <CustomButton
              name={buttonProps.emprunter.name}
              text={buttonProps.emprunter.text}
              variant={buttonProps.emprunter.variant}
              onClick={handleclick}
            ></CustomButton>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default InfoLivre;
