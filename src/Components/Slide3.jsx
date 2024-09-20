import { useState } from 'react'
import './Slide3.css'

function Slide3() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="Slide3">
        <div className="slide3container bg-gradient-to-l from-yellow-400 to-orange-700">
            <div className="Slide3heading text-6xl font-bold">Our Farming Services</div>
            <br />
            <div className="Slide3text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</div>
        </div>
    </div>
        <div className="cardscontainer">
            <div className="card">
                <img src="https://i.ibb.co/VtN1q4T/slide3logo1.png" alt="logo" />
                <div className="cardtext">Irrigation-as-a-Service</div>
            </div>
            <div className="card">
                <img src="https://i.ibb.co/SQtNXJZ/slide3logo2.png" alt="logo" />
                <div className="cardtext">Milling-as-a-Service</div>
            </div>
            <div className="card">
                <img src="https://i.ibb.co/pQbvvVB/slide3logo3.png" alt="logo" />
                <div className="cardtext">Climate-Smart Farmer Advisory</div>
            </div>
        </div>
    </>
  )
}

export default Slide3
