import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Slide1 from './Components/Slide1'
import Slide2 from './Components/Slide2'
import Slide3 from './Components/Slide3'
import Slide4 from './Components/Slide4'
import Slide5 from './Components/Slide5'
import Slide6 from './Components/Slide6'
import Slide7 from './Components/Slide7'
import Slide8 from './Components/Slide8'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Slide1></Slide1>
    <Slide2></Slide2>
    <Slide3></Slide3>
    <Slide4></Slide4>
    <Slide5></Slide5>
    <Slide6></Slide6>
    <Slide7></Slide7>
    <Slide8></Slide8>
    </>
  )
}

export default App
