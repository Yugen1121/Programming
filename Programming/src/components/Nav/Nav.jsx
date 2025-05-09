import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "../assets/react.svg"
import "../Styles.css"
import { useReducer , useState} from 'react';
import BreathingHelper from '../Stress releaver/Breath';
import BMI from '../BMI/BMI';
import CenterContainer from '../Container';
import Home from '../Home/Home';
import Diseases from '../Symptom checker/Diseases';
import MealPlanner from '../MealPlanner/MealPlanner';
function NavBar() {

  // holds all the components 
  const components = {
    Home: {body: <Home />, title: "News"},
    BMI: {body: <BMI />, title: "BMI Calculator"},
    Breathing: {body: <BreathingHelper />, title: "Breathing helper"},
    Diseases: {body: <Diseases />, title: "Symptom Checker"},
    MealPlanner: {body: <MealPlanner />, title: "Meal Planner"}
  }

  // holds all the function to update the state 
  const functions = {
    Home: ()=>{updateState({type: "Home"})},
    BMI: ()=>{updateState({type: "BMI"})},
    Breathing: ()=>{updateState({type: "Breathing"})},
    Diseases: ()=>(updateState({type: "Diseases"})),
    MealPlanner: ()=>(updateState({type: "MealPlanner"}))
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
      case "Diseases":
        return components.Diseases
      case "MealPlanner":
        return components.MealPlanner
    }
  }

  const [state, updateState] = useReducer(reducer, components.Home)

  return (
    <>
    <Navbar expand="md" collapseOnSelect className="bg-body-tertiary navMain">
      <Container>
        <div className='Brand'>
          <Navbar.Brand onClick={functions.Home}>FitnessHub</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='opaque-nav-link'>
          <Nav className="me-auto">
            <Nav.Link className='opaque-nav-link' eventKey='Home' onClick={functions.Home}>Home</Nav.Link>
            <Nav.Link className='opaque-nav-link' eventKey="BMI" onClick={functions.BMI}>BMI</Nav.Link>
            <Nav.Link className='opaque-nav-link' eventKey="Symptom" onClick={functions.Diseases}>Symptom Checker</Nav.Link>
            <NavDropdown title="Assist" id="basic-nav-dropdown" className='opaque-nav-link'>
              <NavDropdown.Item className='opaque-nav-link' eventKey="Stress" onClick={functions.Breathing}>Stress reliever</NavDropdown.Item>
              <NavDropdown.Item className='opaque-nav-link' eventKey="Meal" onClick={functions.MealPlanner}>Meal planner</NavDropdown.Item>
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