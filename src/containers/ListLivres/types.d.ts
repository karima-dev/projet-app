import { Livre } from "../../types";
interface LivreState {
  error: boolean;
  livres: Livre[] | null;
  selectedLivre: Livre[] | null;
}
interface LivreResponse {
  error: boolean;
  message: string;
  data: any;
}

export { LivreState, LivreResponse };
