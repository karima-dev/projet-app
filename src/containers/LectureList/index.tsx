import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomAccordion from "../../components/CustomAccordion";
import { requestEmprunts, requestRemove, requestUpdateRetour, setSelectedEmprunt } from "../InfoLivre/actions";
import { makeSelectEmprunt, makeSelectId } from "../InfoLivre/selectors";
import { CODE } from "../../constants";


const empruntState = createStructuredSelector({
  listLecture: makeSelectEmprunt(),
  idLecture: makeSelectId(),
  listLecture2: makeSelectEmprunt(),
});



const LectureList = () => {
  const [etatClick, setEtatClick] = useState("");
  const dispatch = useDispatch();
  dispatch(requestEmprunts());
  const { listLecture } = useSelector(empruntState);
  const { idLecture } = useSelector(empruntState);
  const tab = Array.from(listLecture);
  const [list, setList] = useState(tab);
  const [erreur, setErreur] = useState("");
  const [codeValue, setCodeValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeValue(e.target.value);
  }
  const handleclick = (e: any) => {
    e.preventDefault();
    if (!codeValue) {
      setErreur("Merci de saisir le code confidentiel");
    }
    else if (Number(codeValue) === CODE) {
      const lelivre = tab?.filter((item) => item.livre[0].id.includes(e.target.name));
      const emprunt = tab?.filter((item) => item.id.includes(e.target.id));

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
  }

  useEffect(() => {
    setList(tab?.filter((item) => item.moyen.includes("lire")));
  }, [listLecture]);

  return (
    <>

      {list.map((item: any, index) => (
        <>
          <CustomAccordion defaultActiveKey={index.toString()}
            eventkey={index.toString()}
            header={item.nameUser}
            title={item.livre[0].titre}
            ean={item.livre[0].ean}
            nombre={item.livre[0].nbre}
            emplacement={item.livre[0].emplacement}
            dateRetour={item.dateRetour}
            onClick={handleclick}
            name={item.livre[0].id}
            id={item.id}
            text="Retourner"
            onChange={handleChange}
            erreur={erreur}
            value={codeValue}
          />

        </>
      ))}

    </>
  );
};
export default LectureList;


