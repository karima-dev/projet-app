import { createStructuredSelector } from "reselect";
import { makeSelectLivres } from "./selectors";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { requestLivres, setSelectedLivre } from "./actions";
import { useState } from "react";
import { Livre } from "../../types";
import LivreAffiche from "../../components/LivreAffiche";
import { useHistory } from "react-router";
import CustomButton from "../../components/CustomButton";
const LivreState = createStructuredSelector({

  livres: makeSelectLivres(),
});
const ListLivres = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  dispatch(requestLivres());
  const { livres } = useSelector(LivreState);

  const [livresList, setLivresList] = useState<Livre[]>([]);



  const handleclick = (e: any) => {


    const monlivre = livres.filter((item) => item.id.includes(e.target.name));

    dispatch(setSelectedLivre(monlivre));
    history.push("/decouvrir");
  }
  return (
    <div className="positionlivre">

      {
        livres?.map((item: any) => (
          <div>
            <LivreAffiche key={item.id} src={item.src} title={item.titre} textlivre={item.auteur} variant="top" />
            <CustomButton name={item.id} text="Découvrir" variant="secondary" onClick={handleclick}></CustomButton>

          </div>
        ))
      }

    </div>
  );
};
export default ListLivres;
