import { useState } from 'react'
import viteLogo from '/vite.svg'
import Nav from "./components/Nav"
import BMI from './components/BMI'
import Container from './components/Container'
import StressOptions from './components/Stress'
import Profile from './components/Profile'

function App() {
  return <>
    <Nav></Nav>  
    <Container content={<BMI/>} heading="BMI Calculator"/>
    <Container content={<StressOptions />} heading='Hello' />
    <Profile />
  </>
}

export default App;
