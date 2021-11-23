import React from "react";
import CustomRecherche from "../../components/CustomRecherche";
  
import LectureList from "../../containers/LectureList";
 
 
const Lecture = () => {
     return (
       <>
      <CustomRecherche name="recherche" type="text"  placeholder="Recherche par nom"/>
        <LectureList/>
       </> 
  );
};

export default Lecture;
