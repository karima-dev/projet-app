import axios from "axios";

export const makeRequest = async (options: any) => await axios(options);

export const getDate=()=>{
     
        const today = new Date(),
    
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      return date;
}

export const nombreJours=(date2:Date,date1:Date)=>{
  var dateDebut,dateFin;
  dateFin=Date.parse(date2.toString())
  dateDebut=Date.parse(date1.toString())
  return (dateFin-dateDebut)/(1000 * 3600 * 24);
}
