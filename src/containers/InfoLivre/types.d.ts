import { Livre } from "../../types";
export interface EmpruntState {
  error: boolean;
  errorMessage: string;
  formData: EmpruntFormData | null;
}

export interface EmpruntFormData {
  id: string | "";
  nameUser: string | null;
  cinUser: string ;
  dateEmprunt: Date;
  dateRetour: Date | null;
  moyen: string;
  etatemprunt: string;
  livre:
    | Livre[]
    | [
        {
          auteur: "";
          date: "";
          id: "";
          src: "";
          titre: "";
          description: "";
          ean: "";
          emplacement: "";
          nbre: 0;
        }
      ];
}
interface EmpruntResponse {
  error: boolean;
  message: string;
  data: any;
}

export { EmpruntState, EmpruntResponse, EmpruntFormData };
