import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./index.css";
const index = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container className="containernav">
        <Navbar.Brand href="/home"><img src="http://www.taichi-kungfu.fr/wp-content/uploads/2016/11/Icone-eBook-Livre-Numerique-Gratuit-150-300x300.png" width="50px" height="50px" alt=""/>MaBiblio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/livres">Livres</Nav.Link>
          <Nav.Link href="/emprunts">Emprunts</Nav.Link>
          <Nav.Link href="/lecture">Lecture sur place</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default index;