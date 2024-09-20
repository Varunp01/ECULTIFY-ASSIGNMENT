import { useState } from 'react'
import './Slide4.css'

function Slide4() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="Slide4">
        <div className="Slide4text mb-8 text-6xl font-bold">Impact <span className='underlineorange'>Traction</span></div>
        <div className="Slide4img mb-3"><img src="src\assets\slide4.png" alt="slide 4 vedio" /></div>
    </div>
    </>
  )
}

export default Slide4
