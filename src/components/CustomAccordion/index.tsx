import { Accordion, AccordionProps } from "react-bootstrap";
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
  key,
  value,
  onClick,
  onChange,
  id,
  src,
  erreur,
  ...propsAccordion
}: CustomAccordionProps & AccordionProps) => {
  return (
    <Accordion defaultActiveKey={eventkey}>
      <Accordion.Item eventKey={eventkey}>
        <Accordion.Header>
          <h5 id="header">
            {"Nom: " +
              header +
              "\u00a0" +
              "\u00a0" +
              "\u00a0" +
              "\u00a0" +
              " Cin: " +
              cin}
          </h5>
        </Accordion.Header>
        <Accordion.Body className="test">
          <ul>
            <li>
              <b>{title}</b>
            </li>
            <li>{ean}</li>
            <li>{emplacement}</li>
            <li>{dateRetour}</li>
          </ul>
          <img className="position" src={src} width="80px" height="80px" />
          <div className="form2">
            <CustomForms
              className="fieldwrapper"
              type="password"
              key={key}
              value={value}
              placeholder="Code confidentiel"
              onChange={onChange}
              name="code"
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
