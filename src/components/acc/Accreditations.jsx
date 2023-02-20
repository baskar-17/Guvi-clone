import React from 'react'
import './accreditations.css'
import Image1 from '../../assets/accreditations1.webp'
import Image2 from '../../assets/accreditations2.webp'
import Image3 from '../../assets/accreditations3.webp'
import Image4 from '../../assets/accreditations4.webp'

function Accreditations() {
  return (
    <div className='acc-container'>
        <h2>Our Accreditations</h2>
        <div className="company-images">

        <div className="image-container">
            <img src={Image1} alt="Accreditations Logo 1" />
        </div>
        <div className="image-container">
            <img src={Image2} alt="Accreditations Logo 2" />
        </div>
        <div className="image-container">
            <img src={Image3} alt="Accreditations Logo 3" />
        </div>
        <div className="image-container">
            <img src={Image4} alt="Accreditations Logo 4" />
        </div>

        </div>
    </div>
  )
}

export default Accreditations