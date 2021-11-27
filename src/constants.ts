export const IMAGESRC ="https://www.letournepage.com/wp-content/uploads/2019/12/2019.11-Lire-Local.arbre2_-1072x536-768x384.png";

export const CODE = 123;

export const buttonProps = {
    decouvrirLivre: {
      text: "Découvrir",
      variant: "secondary",
    },
    lire:{
        text:"Lire sur place",
        name:"lire",
        variant:"secondary"
    },
    emprunter:{
        text:"Emprunter",
        name:"emprunter",
        variant:"secondary"
    }
  };
  export const rechercheProps = {
    rechercheLivre: {
        name:"recherche",
        type:"text",
        placeholder:"Recherche par titre",
    },
  };
  export const defaultProps = {
    livreAffiche: {
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png",
        title:"titre non disponible",
        textlivre:"Non disponible",
    },
    customRecherche:{
        placeholder: "text", 
        name:"text",
        type :"text",
    },
    customLivre:{
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png", 
        title:"titre non disponible",
        auteur :"Non disponible",
        date :"01/01/01",
        text :"text",
        disponibilite :"Pas d'information",
    },
    customForm:{
         placeholder:"Saisir text",
         label :"",
         name :"text",
        
    },
    customButton:{
        text :"Valider",
        name :"btn",
       
   },
   customAccordion:{
    header: "Non disponible", 
    ean:"Non disponible",
    nombre :0,
    emplacement :"Non disponible",
    dateRetour :"01/01/01",
    name :"name",
    text :"Non disponible",
},
  }; 
  export const textmessage={
    erreurvide:"Merci de saisir le code confidentiel",
    erreuradmin:"Cadre réservé à l'administration",
    success:"Livre retourné avec succès",
    successvalider:"Demande validée avec succès",
}  