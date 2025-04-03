import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "./assets/react.svg"
import "./Styles.css"
import { useReducer , useState} from 'react';
import BreathingHelper from './Breath';
import BMI from './BMI';
import Profile from './Profile';
import CenterContainer from './Container';
function NavBar() {


  const components = {
    Profile: {body: <Profile />, title: "Profile"},
    BMI: {body: <BMI />, title: "BMI Calculator"},
    Breathing: {body: <BreathingHelper />, title: "Breathing helper"}
  }

  const functions = {
    Home: ()=>{updateState({type: "Home"})},
    BMI: ()=>{updateState({type: "BMI"})},
    Breathing: ()=>{updateState({type: "Breathing"})}
  }

  const reducer = (state, action)=>{
    switch(action.type){
      case "Home":
        return components.Profile
      case "BMI":
        return components.BMI
      case "Breathing":
        return components.Breathing
    }
  }

  const [state, updateState] = useReducer(reducer, components.Profile)

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary navMain">
      <Container>
        <div className='Brand'>
          <Navbar.Brand href="#home">FitnessHub</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={functions.Home}>Home</Nav.Link>
            <Nav.Link onClick={functions.BMI}>BMI</Nav.Link>
            <Nav.Link>Symptom Checker</Nav.Link>
            <Nav.Link onClick={functions.Breathing}>Stress reliever</Nav.Link>
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
    <CenterContainer content={state.body} heading={state.title}></CenterContainer>
    </>
  );
}

export default NavBar;