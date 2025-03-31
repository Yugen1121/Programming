import { useState } from 'react'
import viteLogo from '/vite.svg'
import Nav from "./components/Nav"
import BMI from './components/BMI'
import Container from './components/Container'
import StressOptions from './components/Stress'

function App() {
  return <>
    <Nav></Nav>  
    <Container content={<BMI/>} heading="BMI Calculator"/>
    <Container content={<StressOptions />} heading='Hello' />
  </>
}

export default App;
