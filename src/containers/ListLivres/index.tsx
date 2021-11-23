import { createStructuredSelector } from "reselect";
import { makeSelectLivres } from "./selectors";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { requestLivres, setSelectedLivre } from "./actions";
import { useEffect, useState } from "react";
import { Livre } from "../../types";
import LivreAffiche from "../../components/LivreAffiche";
import { useHistory } from "react-router";
import CustomButton from "../../components/CustomButton";
import CustomRecherche from "../../components/CustomRecherche";
const LivreState = createStructuredSelector({

  livres: makeSelectLivres(),
});
const ListLivres = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [valeur,setValeur]=useState("");
  if(!valeur){
     
  dispatch(requestLivres());
  }
  
  const { livres } = useSelector(LivreState);
  const [livresList, setLivresList] = useState<Livre[]>([]);
 
  useEffect(() => {
    setLivresList(livres);
    
  },[livres]);

  const handlechange = (e: any) => {
    setValeur(e.target.value);
    if (!valeur) 
    {  
      setLivresList(livres);}
    else{
      
      setLivresList(livres.filter((item) => item.titre.includes(valeur.toUpperCase())));
       
      }
    }

  const handleclick = (e: any) => {


    const monlivre = livres.filter((item) => item.id.includes(e.target.name));

    dispatch(setSelectedLivre(monlivre));
    history.push("/decouvrir");
  }
  const handleclick2 = (e: any) => {

      
    
    }
  return (
    <>
      <CustomRecherche onChange={handlechange} name="recherche" type="text" placeholder="Recherche par titre" />
      
      <div className="positionlivre">

        {
          livresList?.map((item: any) => (
            <div>
              <LivreAffiche key={item.id} src={item.src} title={item.titre} textlivre={item.auteur} variant="top" />
              <CustomButton name={item.id} text="Découvrir" variant="secondary" onClick={handleclick}></CustomButton>

            </div>
          ))
        }

      </div>
    </>
  );
};
export default ListLivres;
