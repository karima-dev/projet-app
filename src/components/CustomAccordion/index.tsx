import {
  Accordion,
  AccordionProps,
} from "react-bootstrap";
import CustomButton from "../CustomButton";
import CustomForms from "../CustomForms";
import "./index.css";
import { defaultProps } from "../../constants";
const index = ({
  eventkey,
  header,
  title,
  cin,
  ean,
  emplacement,
  nombre,
  dateRetour,
  name,
  text,
  value,
  onClick,
  onChange,
  id,
  erreur,
  ...propsAccordion
}: CustomAccordionProps & AccordionProps) => {
  return (
    <Accordion defaultActiveKey={eventkey}>
      <Accordion.Item eventKey={eventkey}>
        <Accordion.Header><h5 id="header">{"Nom: "+ header+"\u00a0"+"\u00a0"+"\u00a0"+"\u00a0"+" Cin: "+cin}</h5></Accordion.Header>
        <Accordion.Body>
          <ul>
            <li><b>{title}</b></li>
            <li>{ean}</li>
            <li>{emplacement}</li>
            <li>{dateRetour}</li>
          </ul>
          <div className="form2">
            <CustomForms
              className="fieldwrapper"
              name="code"
              type="text"
              value={value}
              placeholder="Code confidentiel"
              onChange={onChange}
            ></CustomForms>
            <CustomButton
              className="btn"
              name={name}
              text={text}
              variant="warning"
              onClick={onClick}
              id={id}
            ></CustomButton>
          </div>
          <span>{erreur}</span>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
index.defaultProps = {
  ...defaultProps.customAccordion,
};
export default index;
