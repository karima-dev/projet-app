import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomAccordion from "../../components/CustomAccordion";
import { requestEmprunts, requestRemove, requestUpdateRetour, setSelectedEmprunt } from "../InfoLivre/actions";
import { makeSelectEmprunt, makeSelectId } from "../InfoLivre/selectors";
import { CODE, textmessage } from "../../constants";
import CustomRecherche from "../../components/CustomRecherche";
import "./index.css"
import { toast } from "react-toastify";

const empruntState = createStructuredSelector({
  listLecture: makeSelectEmprunt(),
  idLecture: makeSelectId(),
  listLecture2: makeSelectEmprunt(),
});



const LectureList = () => {
  const dispatch = useDispatch();
  const [valeur, setValeur] = useState("");
  const [codeValue, setCodeValue] = useState("");

  if (!valeur) {
    dispatch(requestEmprunts());
  }
  const { listLecture } = useSelector(empruntState);
  const tab = Array.from(listLecture);
  const [list, setList] = useState(tab);

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "code") {
      setCodeValue(e.target.value);

    }
    else if (e.target.name === "recherche") {
      setValeur(e.target.value.toUpperCase());
      setList(tab?.filter((item) => item.moyen.includes("lire") && item.cinUser.includes(valeur)));
      setCodeValue("");
    }
    else {
      setCodeValue("");
    }
  }
  const handleclick = (e: any) => {
    e.preventDefault();
    if (!codeValue) {
      toast.warning(textmessage.erreurvide);
    }
    else if (Number(codeValue) === CODE) {
      const emprunt = tab?.filter((item) => item.id.includes(e.target.id));

      dispatch(setSelectedEmprunt(emprunt));
      dispatch(requestUpdateRetour());

      dispatch(requestRemove());
      toast.success(textmessage.success);
      setCodeValue("");
    }
    else {
      setCodeValue("");
      toast.error(textmessage.erreuradmin);
    }
  }

  useEffect(() => {
    setList(tab?.filter((item) => item.moyen.includes("lire")));

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
      {list.map((item: any, index) => (
        <>
          <CustomAccordion defaultActiveKey={index.toString()}
            eventkey={index.toString()}
            header={item.nameUser}
            title={item.livre[0].titre}
            ean={item.livre[0].ean}
            cin={item.cinUser}
            nombre={item.livre[0].nbre}
            emplacement={item.livre[0].emplacement}
            dateRetour={item.dateRetour}
            onClick={handleclick}
            name={item.livre[0].id}
            id={item.id}
            text="Retourner"
            onChange={handleChange}
            value={codeValue}
            key={index.toString()}
            src={item.livre[0].src}

          />


        </>
      ))}

    </>
  );
};
export default LectureList;


