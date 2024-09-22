import React from 'react'
import "./WelcomePage.css"
import hospitalimg from "../assets/Images/hospital-image-22.png"
const WelcomePage = () => {
  return (
    <>
      <div className='welcome-page-main-container inline-around'>
         
        <div className='welcome-page-child1-container pl20'>
            <h2 className='welcome-page-small-heading'>Welcome To Medic</h2>
           <h1 className='welcome-page-main-heading f-45 f-w700'>Exceptional Medical Specialty Healthcare</h1>
           <h2>Take Care of Your Health</h2>
           <div className='welcome-page-button-container'>
            <button>Get an Appointment</button>
            <button>View Department</button>
           </div>
        </div>
        <div className='welcome-page-child2-container'>
           <img src={hospitalimg} alt={"no data found"} />
        </div>
      </div>
    </>
  )
}

export default WelcomePage
