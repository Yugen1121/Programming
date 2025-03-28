import { useState } from 'react'
import viteLogo from '/vite.svg'
import Nav from "./components/Nav"
import BMI from './components/BMI'


function App() {
  return <>
    <Nav></Nav>  
    <BMI/>
  </>
}

export default App;
