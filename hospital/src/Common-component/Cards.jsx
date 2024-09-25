import React from "react";
import "./Cards.css";
import Doc1 from "../assets/Images/Doc1.jpg";
import Doc3 from "../assets/Images/Doc3.jpg";
import Doc2 from "../assets/Images/Doc2.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Hey1 from "../assets/Images/hey1.avif";
const Cards = () => {
  return (
    <>
      <h1 className="text-center mt35 heading-lg">Our Expert Doctor's</h1>
      <main className="Main-cards-container-wrapper">
        <div className="card">
          <img className="cards-img " src={Doc2} alt="" />
          <div className="cards-overlay">
            <div className="card-content">
              <h1 className="card-heading">Dr. Anna</h1>
              <h3 className="mt5">Internist, General Practitioner </h3>
              <div className="mt10 contact-links ">
                <a className="F-icons-links" href="">
                  {" "}
                  <i>
                    <FaFacebook className="F-icons" />
                  </i>
                </a>

                <a className="F-icons-links" href="">
                  <i>
                    <FaSquareInstagram className="F-icons" />
                  </i>
                </a>
                <a className="F-icons-links" href="">
                  <i>
                    <FaLinkedin className="F-icons" />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="cards-img " src={Doc3} alt="" />
          <div className="cards-overlay">
            <div className="card-content">
              <h1 className="card-heading">Dr. Andrew</h1>
              <h3 className="mt5">Internist, Orthopedic Surgeon </h3>
              <div className="mt10 contact-links ">
                <a className="F-icons-links" href="">
                  {" "}
                  <i>
                    <FaFacebook className="F-icons" />
                  </i>
                </a>

                <a className="F-icons-links" href="">
                  <i>
                    <FaSquareInstagram className="F-icons" />
                  </i>
                </a>
                <a className="F-icons-links" href="">
                  <i>
                    <FaLinkedin className="F-icons" />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="cards-img " src={Doc1} alt="" />
          <div className="cards-overlay">
            <div className="card-content">
              <h1 className="card-heading">Dr. Anthony</h1>
              <h3 className="mt5">Surgeon, Сardiologist </h3>
              <div className="mt10 contact-links ">
                <a className="F-icons-links" href="">
                  {" "}
                  <i>
                    <FaFacebook className="F-icons" />
                  </i>
                </a>

                <a className="F-icons-links" href="">
                  <i>
                    <FaSquareInstagram className="F-icons" />
                  </i>
                </a>
                <a className="F-icons-links" href="">
                  <i>
                    <FaLinkedin className="F-icons" />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cards;
