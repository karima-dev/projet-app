 
import { defaultProps } from "../../constants";
import CustomButton from "../CustomButton";
import CustomForms from "../CustomForms";
import "./index.css"

const index = ({  placeholder, name,value, onChange,type }: CustomRechercheProps) => {

  return (
    <>
      <div className="formrecherche">
            <CustomForms
              className="field"
              name={name}
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
            ></CustomForms>
           
          </div> 

    </>
  );
};
index.defaultProps = {
  ...defaultProps.customRecherche,
};
export default index;



