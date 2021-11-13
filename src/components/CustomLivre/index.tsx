import React from "react";

import "./index.css"
const index = ({src,title,auteur,date,text,disponibilite}:CustomLivreProps) => {

    return (
        <div className="divcustom1">
        <div className="divcustom">
            <img src={src} ></img>
            </div>
            <div className=" divcustom cst">
            <span>{disponibilite}</span>
            <h3>{title}</h3>
            <h5>{auteur}</h5>
            <h6>{date}</h6>
            
            <h6>Description</h6>
            <p>{text}</p>


        </div>
</div>
    );
};
export default index;