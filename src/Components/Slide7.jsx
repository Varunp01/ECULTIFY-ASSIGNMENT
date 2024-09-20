import { useState } from 'react'
import './Slide7.css'


function Slide7() {
  const [count, setCount] = useState(0);


  return (
    <>
      <div className="Slide7 text-center mx-auto my-4">
        <div className="slide7text  mb-3 text-6xl font-bold">Gallery</div>
        <img src="https://i.ibb.co/jHcRhkn/slide7.png" alt="slide7" />
      </div>
    </>
  )
}

export default Slide7;
