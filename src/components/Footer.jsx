import React from 'react'
import Footer1 from '../assets/img/Footer1.png'
import Footer2 from '../assets/img/Footer2.png'
import Footer3 from '../assets/img/Footer3.png'

const Footer = () => {
  return (
    <div className='flex gap-3 p-2 justify-center bg-white'>
        <img src={Footer1} alt="Alcaldia" className='w-40 object-container' />
        <img src={Footer2} alt="Gobernacion" className='w-40 object-container'/>
        <img src={Footer3} alt="Logo Francisco de Paula Santander" className='w-40 object-container'/>
    </div>
  )
}

export default Footer