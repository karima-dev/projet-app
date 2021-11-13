import { Livre } from "../../types";
export interface EmpruntState {
   
  error: boolean;
  errorMessage: string;
  formData: EmpruntFormData | null;
}

export interface EmpruntFormData {
  id:string | "";
  nameUser: string | null;
  cinUser: string | null;
  dateEmprunt: Date;
  dateRetour: Date | null;
  moyen:string;
  etatemprunt:string | null;
  livre:Livre[] | [{auteur:"",date:"",id:"",src:"",titre:"",description:"",ean:"",emplacement:"",nbre:0}];
}
interface EmpruntResponse {
  error: boolean;
  message: string;
  data: any;
}

export { EmpruntState,EmpruntResponse,EmpruntFormData };
