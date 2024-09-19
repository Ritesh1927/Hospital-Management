import React from "react";
import "./Footer.css";
import { Link, Routes, Route } from "react-router-dom";
import logo from "../assets/Icons/hospital-logo.webp";
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

      <div className="container footer-main-container">
        <div className="inline-around  footer-child-container pt50">
          <div className="footer-div-1 w-20">
            <img className="footer-logo" src={logo} alt={"no data"} />
            <p className="f-18 f-w500 font-fmly text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates officiis, voluptate laudantium dicta,dolorum adipisci
              totam aspernatur? At iusto rerum hic vero labore.
            </p>
          </div>
          <div className="footer-div-2 w-25">
            <h1>Departments</h1>
            <ul className="department-link-element">
              <li>
                <Link to="/ Footer" className="footer-department-page-link">
                  Medicine
                </Link>
              </li>
              <li>
                <Link to="/ Footer" className="footer-department-page-link">
                  Neurology
                </Link>
              </li>
              <li>
                <Link to="/ Footer" className="footer-department-page-link">
                  Eye Care
                </Link>
              </li>
              <li>
                <Link to="/ Footer" className="footer-department-page-link">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link to="/ Footer" className="footer-department-page-link">
                  Dental Care
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-div-3 w-25">
            <h1>Opening Hours</h1>
          </div>
          <div className="footer-div-4 w-25">
            <h1>Get In Touch</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
