import {  Card, CardImgProps } from "react-bootstrap";
import { defaultProps } from "../../constants";

const index = ({ src, title, textlivre, ...affichePropos }: LivreAfficheProps & CardImgProps) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img {...affichePropos} src={src} width="472px" height="300px" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {textlivre}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
index.defaultProps = {
  ...defaultProps.livreAffiche,
};
export default index;