import React from 'react'
import "./Footer.css"
import{Link ,Routes,Route} from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineAddLocation } from "react-icons/md";import logo from "../assets/Icons/hospital-logo.webp"
const Footer = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/Footer" element={<Footer />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
        </Routes>
      </div> 
       <div className='container footer-main-container  '>
         <div className='   footer-child-container pt50'>
            <div className='footer-div-1 pr50 pl20 '>
              <img className='footer-logo' src={logo} alt={"no data"} />
              <p className='f-18 f-w500 font-fmly text-white'>Lorem ipsum dolor sit amet adipisicing elit. Voluptates officiis,adipisci totam aspernatur? At iusto rerum hic vero labore.</p>
              <div className='inline footer-social-icon-parent mt20'>
                <div className='footer-social-child-cont-1 pt3'>
                  <a href="#">
                    <i className='text-white f-18'><FaFacebookF /></i>
                  </a>
                </div>
                <div className='footer-social-child-cont-1 pt3'> 
                  <a href="#">
                    <i className='text-white f-18'><FaTwitter /></i>
                  </a>
                </div>
                <div className='footer-social-child-cont-1 pt3'>
                  <a href="#">
                    <i className='text-white f-18'>< FaLinkedinIn/></i>
                  </a>
                </div>
                <div className='footer-social-child-cont-1 pt3'>
                  <a href="#">
                    <i className='text-white f-18'>< FaYoutube/></i>
                  </a>
                </div>
                <div className='footer-social-child-cont-1 pt3'>
                  <a href="#">
                    <i className='text-white f-18 '>< GrInstagram/></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='footer-div-2  pl20'>
                <h1 className='footer-heading'>Departments</h1>
            <ul className="department-link-element mt40">
              <li>
              <Link  to="/ Footer" className="footer-department-page-link text-white">
                  Medicine
                </Link>
              </li>
              <li>
              <Link to="/ Footer" className="footer-department-page-link text-white">
                   Neurology
                </Link>
              </li>
              <li>
              <Link to="/ Footer" className="footer-department-page-link text-white">
                 Eye Care

                </Link>
              </li>
              <li>
              <Link to="/ Footer" className="footer-department-page-link text-white">
                  Cardiology
                </Link>
              </li>
              <li>
              <Link to="/ Footer" className="footer-department-page-link text-white">
                Dental Care
                </Link>
              </li>
            </ul>
            </div>
            <div className='footer-div-3 pr30'>
                <h1 className='footer-heading'>Opening Hours</h1>
                <div className='opening-hours-child-wrapper text-white inline-between mt40'>
                  <div>
                    <p>Mon-Tue:</p>
                  </div>
                  <div>
                    <p>6:00AM-10:00PM</p>
                  </div>
                  
                </div>
                <div className='opening-hours-child-wrapper text-white inline-between'>
                  <div>
                    <p>Wed-Thu:</p>
                  </div>
                  <div>
                    <p>6:00AM-10:00PM</p>
                  </div>
                </div>
                <div className='opening-hours-child-wrapper text-white inline-between'>
                  <div>
                    <p>Fri:</p>
                  </div>
                  <div>
                    <p>6:00AM-04:00PM</p>
                  </div>
                </div>
                <div className='opening-hours-child-wrapper-lst text-white inline-between'>
                  <div>
                    <p>Sun:</p>
                  </div>
                  <div>
                    <p> Closed</p>
                  </div>
                </div>
            </div>
            <div className='footer-div-4 pl50'>
                <h1 className='footer-heading'>Get In Touch</h1>
                <div className='mt40 footer-contact-bar-wrapper text-white' >
                <div className='inline'>
                  <div className='mt2'>
                    <i className='mr10 footer-contact-icon'><BiSolidPhoneCall/></i>
                  </div>
                  <div>
                    <h4>Hotline:</h4>
                    <p>+123-456-789</p>
                  </div>
                </div>
                <div className='inline'>
                  <div className='mt2'>
                    <i className='mr10 footer-contact-icon' ><MdOutlineEmail/></i>
                  </div>
                  <div>
                    <h4>Email:</h4>
                    <p> <a className='text-white contact-mail-wrapper' href="#">hello@example.com</a></p>
                  </div>
                </div>
                <div className='inline '>
                  <div className='mt2'>
                    <i className='mr10 footer-contact-icon  '><MdOutlineAddLocation/></i>
                  </div>
                  <div>
                    <h4>Address:</h4>
                    <p> 124, Western Road, Melbourne Australia</p>
                  </div>
                </div>
                 </div>
            </div>
         </div>
         <div className='text-white footer-copyright-container mt50'>
            Copyright &#169; 2023 Medic. All rights reserved.
         </div>
      </div>
    </>
  )
}

export default Footer