import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./index.css";
const index = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/home">MaBiblio</Navbar.Brand>
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