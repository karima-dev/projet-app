import { Form, FormControlProps } from "react-bootstrap";
import { defaultProps } from "../../constants";
import "./index.css"

const index = ({ label, placeholder, key, name, onChange, ...formProps }: CustomFormsProps & FormControlProps) => {

  return (
    <>
      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Control  key={key} placeholder={placeholder} name={name} onChange={onChange} {...formProps} />
        </Form.Group>
      </Form>

    </>
  );
};
index.defaultProps = {
  ...defaultProps.customForm,
};
export default index;



