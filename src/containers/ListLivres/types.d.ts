import { Livre } from "../../types";
interface LivreState {
   loading: boolean;
  error: boolean;
  livres: Livre[] | null;
  selectedLivre: Livre[] | null;
}
interface LivreResponse {
  error: boolean;
  message: string;
  data: any;
}

export { LivreState,LivreResponse };
