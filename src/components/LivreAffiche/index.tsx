import React from "react";
import { CardImg,Card,Button, CardImgProps } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CustomButton from "../CustomButton";
  
const index = ({src,title,textlivre,...affichePropos}:LivreAfficheProps & CardImgProps) => {
    
  return (
    <Card style={{ width: '18rem'}}>
  <Card.Img {...affichePropos} src={src} width="472px" height="300px"/>
  <Card.Body>
    
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {textlivre}
    </Card.Text>
  </Card.Body>
</Card>
  );
};
export default index;