import { useState } from 'react'
import './Slide2.css'

function Slide2() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="Slide2">
      <div className="slide2background">
        <img src="src\assets\slide2background2.png" alt="slide 2 aunty" className='slide2background2'/>
        <img src="src\assets\slide2background1.png" alt="slide 2 background" className='slide2background1'/>
      </div>
      <div className="slide2content">
        <div className="slide2heading  mb-3 text-6xl font-bold">About <span className='underlineorange'>Us</span></div>
        <div className="slide2text">Oorja is a Farming-as-a-Service company working at the intersection of sustainable agriculture and clean energy. We provide solar-powered irrigation, milling and climate-smart farmer advisory services to smallholder farmers in India. We have championed the Pay-Per-Use model that removes the upfront cost barrier for low-income farmers - making solar technology accessible to the last farmer in the line.</div>
      </div>
    </div>
    
    </>
  )
}

export default Slide2
