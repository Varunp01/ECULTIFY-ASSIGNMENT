import { useState } from 'react'
import './Slide5.css'

function Slide5() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Slide5 text-center">
        <div className="Slide4text mb-8 text-4xl font-bold px-4">We are aligned to 5 of the UN Sustainable Development Goals</div>
        <div className="Slide4text px-4 mb-2">Access to affordable, reliable energy is fundamental to economic activity and poverty alleviation. Oorja's services are designed to transform the lives of low-income communities, notably small and marginal farmers, low-income households and women farmers, by significantly increasing income when linked to productive activities at their farm.</div>


        <div className="slide5grid grid grid-cols-4 grid-rows-4 gap-4 mx-auto my-4">
          <div className="row-span-2 gradient-background slide5gridcell cellwidth150px my-auto py-14">
            <div className="silde5gridheading text-4xl font-bold text-white">XYZ</div>
            <div className="silde5gridtext text-white">Projects Installed</div>
          </div>
          <div className='gradient-background-green slide5gridcell  '>
            <div className="silde5gridheading text-4xl font-bold text-white">XYZ</div>
            <div className="silde5gridtext text-white">Smallholders Impacted</div>
          </div>
          <div className=' gradient-background slide5gridcell  '>
            <div className="silde5gridheading text-4xl font-bold text-white">XYZ</div>
            <div className="silde5gridtext text-white">MWh Clean Energy Generated</div>
          </div>
          <div className="row-span-2 gradient-background-green slide5gridcell cellwidth150px my-auto py-12">
            <div className="silde5gridheading text-4xl font-bold text-white">XYZ</div>
            <div className="silde5gridtext text-white">Tons of CO2e Emissions Saved</div>
          </div>
          <div className="row-span-2 col-start-1 row-start-3 gradient-background-green slide5gridcell cellwidth150px  my-auto py-12">
            <div className="silde5gridheading text-4xl font-bold text-white">XYZ</div>
            <div className="silde5gridtext text-white">Reduction in Chemical Fertilisers</div>
          </div>
          <div className="col-start-2 row-start-4  gradient-background slide5gridcell  ">
            <div className="silde5gridheading text-4xl font-bold text-white">XYZ</div>
            <div className="silde5gridtext text-white">Saved in Fuel Expenses</div>
          </div>
          <div className="col-start-3 row-start-4 gradient-background-green slide5gridcell  ">
            <div className="silde5gridheading text-4xl font-bold text-white">XYZ</div>
            <div className="silde5gridtext text-white">Increase in Farmers’ Incomes</div>
          </div>
          <div className="row-span-2 col-start-4 row-start-3  gradient-background slide5gridcell cellwidth150px my-auto py-12">
            <div className="silde5gridheading text-4xl font-bold text-white">XYZ</div>
            <div className="silde5gridtext text-white">Customers Don’t Use Diesel Anymore</div>
          </div>
          <div className="col-span-2 row-span-2 col-start-2 row-start-2">
            <div className="slide5images mx-auto">
              <img src="https://i.ibb.co/WyhGXXX/slide-5-crop.png" alt="imagecrop" className='slide5crop' />
              <img src="https://i.ibb.co/bzyfpMV/slide-5-people.png" alt="imagepeople" className='slide5people' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Slide5
