import { useState } from 'react'
import './Slide1.css'

function Slide1() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="Slide1Container">
                <div className="Slide1Background">
                <img src="https://i.ibb.co/XyHpx1m/slide1background.png" alt="background"/>
                </div>
                <div className="Slide1text">
                    <div className="Slide1Heading mb-3 text-6xl font-bold text-white">Energising <br /> Agriculture</div>
                    <div className="Slide1Para mb-6 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</div>
                    <div className="Slide1Button p-2 text-white bg-gradient-to-r from-yellow-400 to-orange-500 text-center"><div>Who we are</div></div>
                </div>
            </div>
        </>
    )
}

export default Slide1
