interface CustomAccordionProps {
  eventkey: string;
  header: string | null;
  title: string | null;
  ean: string | null;
  emplacement: string | null;
  cin:string;
  onClick?: (e) => void;
  onChange?: (e) => void;
  nombre: number | null;
  dateRetour?: Date | null;
  name: string ;
  text: string;
  erreur?: string;
  value?: string;
  key?:string;
  src?:string;
  
}
