import React from "react";
import {  Form,FormProps, FormControl, FormControlProps } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CustomButton from "../CustomButton";
  import "./index.css"
const index = ({label,placeholder,name,onChange, ...formProps}: CustomFormsProps & FormControlProps) => {
    
  return (
    <> 
    <Form className="form">
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control  placeholder={placeholder} name={name} onChange={onChange} {...formProps}/>
    </Form.Group>
    </Form>
    
    </> 
  );
};
export default index;



