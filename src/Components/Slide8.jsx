import { useState } from 'react'
import './Slide8.css'


function Slide8() {
  const [count, setCount] = useState(0);


  return (
    <>
      <div className="Slide8 text-center mx-auto my-4">
        <div className="slide7text mb-3 text-6xl font-bold my-3">Investors</div>
        <div className="slide8grid grid grid-cols-4 grid-rows-3 gap-4 mx-11 my-3">
          <div ><img src="https://i.ibb.co/QvK1WTC/Slide8logo1.png" alt="" /></div>
          <div ><img src="https://i.ibb.co/vx3RttG/Slide8logo2.png" alt="" /></div>
          <div ><img src="https://i.ibb.co/Tmx401T/Slide8logo3.png" alt="" /></div>
          <div ><img src="https://i.ibb.co/QkNCP4p/Slide8logo4.png" alt="" /></div>
          <div className="row-start-2"><img src="https://i.ibb.co/B46hShC/Slide8logo5.png" alt="" /></div>
          <div className="row-start-2"><img src="https://i.ibb.co/0JrMx2k/Slide8logo6.png" alt="" /></div>
          <div className="row-start-2"><img src="https://i.ibb.co/Zgvmmt0/Slide8logo7.png" alt="" /></div>
          <div className="row-start-2"><img src="https://i.ibb.co/7R5d5fY/Slide8logo8.png" alt="" /></div>
          <div className="row-start-3"><img src="https://i.ibb.co/V9Bzyhn/Slide8logo9.png" alt="" /></div>
          <div className="row-start-3"><img src="https://i.ibb.co/RpFpTk3/Slide8logo10.png" alt="" /></div>
          <div className="row-start-3"><img src="https://i.ibb.co/VNcHW86/Slide8logo11.png" alt="" /></div>
          <div className="row-start-3"><img src="https://i.ibb.co/ySrq6sm/Slide8logo12.png" alt="" /></div>
        </div>
      </div>
      <img src="https://i.ibb.co/WkWZ13x/Footer.png" alt="" className='mb-2'/>
    </>
  )
}

export default Slide8;