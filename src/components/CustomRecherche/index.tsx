 
import CustomButton from "../CustomButton";
import CustomForms from "../CustomForms";
import "./index.css"

const index = ({  placeholder, name, onChange,type }: CustomRechercheProps) => {

  return (
    <>
      <div className="formrecherche">
            <CustomForms
              className="field"
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
            ></CustomForms>
           
          </div> 

    </>
  );
};
export default index;



