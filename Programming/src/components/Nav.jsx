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
import Home from './Home';
import Login from './LOGIN';
import Diseases from './Diseases';
import Symptoms from './Symptoms';

function NavBar() {

  // holds all the components 
  const components = {
    Home: {body: <Home />},
    Profile: {body: <Profile />, title: "Profile"},
    BMI: {body: <BMI />, title: "BMI Calculator"},
    Breathing: {body: <BreathingHelper />, title: "Breathing helper"},
    Login: {body: <Login />, title: "LogIn"},
    Diseases: {body: <Diseases />, title: "Diseases"}
  }

  // holds all the function to update the state 
  const functions = {
    Profile: ()=>{updateState({type: "Profile"})},
    Home: ()=>{updateState({type: "Home"})},
    BMI: ()=>{updateState({type: "BMI"})},
    Breathing: ()=>{updateState({type: "Breathing"})},
    Login: ()=>{updateState({type: "Login"})},
    Diseases: ()=>(updateState({type: "Diseases"}))
  }

  // a reducer that takes a type and runs the component dictionary to return components
  const reducer = (state, action)=>{
    switch(action.type){
      case "Home":
        return components.Home
      case "BMI":
        return components.BMI
      case "Breathing":
        return components.Breathing
      case "Profile":
        return components.Profile
      case "Login":
        return components.Login
      case "Dieases":
        return components.Diseases
    }
  }

  const [state, updateState] = useReducer(reducer, components.Profile)

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary navMain">
      <Container>
        <div className='Brand'>
          <Navbar.Brand onClick={functions.Home}>FitnessHub</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={functions.Home}>Home</Nav.Link>
            <Nav.Link onClick={functions.BMI}>BMI</Nav.Link>
            <Nav.Link onClick={functions.Diseases}>Symptom Checker</Nav.Link>
            <Nav.Link onClick={functions.Breathing}>Stress reliever</Nav.Link>
            <Nav.Link href="#link">Meal planner</Nav.Link>
            <Nav.Link href="#link">Scedule planner</Nav.Link>
            
          </Nav>

          <Nav className="ms-auto">
            <NavDropdown title={( <img src={Image}/>)} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={functions.Profile}>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={functions.Login}>
                login
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