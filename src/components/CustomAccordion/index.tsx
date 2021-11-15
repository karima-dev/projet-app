import {
  Accordion,
  AccordionProps,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import CustomButton from "../CustomButton";
import CustomForms from "../CustomForms";
import "./index.css";
const index = ({
  eventkey,
  header,
  title,
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
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>{title}</li>
            <li>{ean}</li>
            <li>{emplacement}</li>
            <li>{nombre}</li>
            <li>{dateRetour}</li>
          </ul>
          <div className="form2">
            <CustomForms
              className="fieldwrapper"
              name="code"
              type="text"
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
export default index;
