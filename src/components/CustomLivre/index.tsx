
import { defaultProps } from "../../constants";
import "./index.css"

const index = ({ src, title, auteur, date, text, disponibilite }: CustomLivreProps) => {

    return (
        <div className="divparent">
            <div>
                <img src={src} height='450px'></img>
            </div>
            <div className=" divcustom">
                <span id="span">{disponibilite}</span>
                <h3>{title}</h3>
                <h5 className="classauteur">{auteur}</h5>
                <h5 className="classauteur">{date}</h5>
                <hr className="trait"></hr>
                 <h6 className="colorinfo">Description</h6>
                <p>{text}</p>


            </div>
        </div>
    );
};
index.defaultProps = {
    ...defaultProps.customLivre,
  };
export default index;