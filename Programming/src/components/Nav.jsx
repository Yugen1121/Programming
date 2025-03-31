import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "./assets/react.svg"
import "./Styles.css"

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navMain">
      <Container>
        <div className='Brand'>
          <Navbar.Brand href="#home">FitnessHub</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">BMI</Nav.Link>
            <Nav.Link href="#link">Symptom Checker</Nav.Link>
            <Nav.Link href="#link">Stress reliever</Nav.Link>
            <Nav.Link href="#link">Meal planner</Nav.Link>
            <Nav.Link href="#link">Scedule planner</Nav.Link>
            
          </Nav>

          <Nav className="ms-auto">
            <NavDropdown title={( <img src={Image}/>)} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;