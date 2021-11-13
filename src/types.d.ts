 
import { EmpruntState } from "./containers/InfoLivre/types";
import { LivreState } from "./containers/ListLivres/types";
 

interface Livre {
  auteur: string;
  date: string;
  id: string;
  nbre: number;
  src: string;
  titre: string;
  description:string;
  ean:string;
  emplacement:string;
}

interface GlobalState {
   
  lelivre: LivreState;
  lemprunt:EmpruntState;
  
}

export { Livre, GlobalState };
