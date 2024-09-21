import React from 'react'
import "./AppoinmentPage.css"
const AppoinmentPage = () => {
  return (
    <>
      <div>
        <div className='Appoinment-background-img  pb50'>
           <div className='Appointment-parent-container pt50'>
            <h1 className='f-42 f-w700'>DOCTOR APPOINTMENT FORM</h1>
            <div className='Appointment-child-container pt50'>
            <div className='Appointment-child-1-container '>
              <div  className='Appointment-input-container-1  f-w700 f-22  '>
                 Name : <input type="text" placeholder='Enter Your Name' required />
              </div>
              <div className='Appointment-input-container-1 f-w700  f-20 '>
                Email: <input type="email" placeholder='Enter Your Email'  required/>
              </div>
              <div className='Appointment-input-container-1 f-w700 f-22'>
                M.No : <input type="number" placeholder='Enter Your Phone' required />
              </div>
              <div className='Appointment-input-container-1 f-w700 f-22'>
                   Date : <input type="date"   required />  
              </div> 
               <div className='Appointment-input-container-5'>
              <main className="department-container">
                <select name="Department" id="">
                  <option value="Select an Department">Select an Department</option>
                  <option value=" Emergency Department (ED)">Emergency Department (ED)</option>
                  <option value=" Intensive Care Unit (ICU)"> Intensive Care Unit (ICU)</option>
                  <option value="Surgery Department">Surgery Department</option>
                  <option value="Obstetrics and Gynecology (OB/GYN)" >Obstetrics and Gynecology (OB/GYN)</option >
                  <option value="Radiology" >Radiology</option >
                  <option value="Pathology" >Pathology</option >
                  <option value="Pharmacy" >Pharmacy</option >
                  <option value="Laboratory Services" >Laboratory Services</option >
                  <option value="Cardiology" >Cardiology</option >
                  <option value="Neurology" >Neurology</option >
                  <option value="Orthopedics" >Orthopedics</option >
                </select>
              </main>
              </div>
              <div className='Appointment-input-container-5'>
              <main className="time-container">
                <select name="time" id="">
                  <option value="Select Time">Select Time</option>
                  <option value="09:00 AM To 10:00 AM" >09:00 AM To 10:00 AM </option>
                  <option value="10:00 AM To 11:00 AM" >10:00 AM To 11:00 AM </option>
                  <option value="11:00 AM To 12:00 PM" >11:00 AM To 12:00 PM </option>
                  <option value="12:00 PM To 01:00 PM" >12:00 PM To 01:00 PM </option >
                  <option value="01:00 PM To 02:00 PM" >01:00 PM To 02:00 PM </option >
                  <option value="02:00 PM To 03:00 PM" >02:00 PM To 03:00 PM </option >
                  <option value="03:00 PM To 04:00 PM" >03:00 PM To 04:00 PM </option >
                  <option value="04:00 PM To 06:00 PM" >04:00 PM To 06:00 PM </option >
                  <option value="06:00 PM To 08:00 PM" >06:00 PM To 08:00 PM </option >
                  <option value="08:00 PM To 10:00 PM" >08:00 PM To 10:00 PM </option >
                </select>
              </main>
              </div>
             
            </div>
            <div className='Appointment-input-container-6 mt50'>
              <textarea name="" id="" placeholder='Your Message....'></textarea>
              </div>
            
              
              <div className='Appointment-form-submit-button mt30'>
              <button>Submit</button>
              </div>
              
              </div>
           </div>
        </div>
        
      </div>
    </>
  )
}

export default AppoinmentPage
