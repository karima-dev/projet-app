interface CustomAccordionProps {
  eventkey: string;
  header: string;
   title:string;
   ean:string;
   emplacement:string;
   onClick?: (e) => void;
   onChange?: (e) => void;
   nombre:number;
   dateRetour?:Date;
   name:string;
   text:string;
   erreur?:string;
   value?:string;
}
 