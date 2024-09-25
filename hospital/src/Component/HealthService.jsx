import React from "react";
import "./HealthService.css";
import { Link, Routes, Route } from "react-router-dom";
import medicineImg from "../assets/Icons/Medicine-health-service.png";
import NeurologyImg from "../assets/Icons/Neurology.png";
import EyeCareserviceImg from "../assets/Icons/Eye Care-health-service.png";
import CardiologyserviceImg from "../assets/Icons/Cardiology-health-service.png";
import DentalserviceImg from "../assets/Icons/Dental Care-health-service.png";
import PulmonaryserviceImg from "../assets/Icons/Pulmonary-health-service.png";
const HealthService = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/HealthService" element={<HealthService />}></Route>
        </Routes>
      </div>
      <div className="health-service-main-container ">
        <div className="health-service-heading-container">
          <h1 className="f-40 mb30 pt50">
            Our Healthcare <span className="health-heading-span">Services</span>
          </h1>
          <p className="health-service-summary-container f-18 f-w500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            perferendis deleniti illum necessitati voluptates ipsum, ratione
            dolorum veritatis minus mollitia placeat
          </p>
        </div>
        <div className="health-service-parent-div-container p50 inline-evenly mt40 mb50">
          <div className="health-service-child">
            <div className="medicine-img-container">
              <img src={medicineImg} alt={"no data found"} />
            </div>

            <h2>Medicine</h2>
            <p className="mt10 mb20 p20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              odit, unde fugiat autem earum luptatem sequuntur.
            </p>

            <div className="health-service-read-more-main-contaoner mb25">
              <Link
                to="/HealthService"
                className="health-service-read-more-link f-18"
              >
                Read More
              </Link>
            </div>
            <div className="overlay">
              <Link
                to="/HealthService"
                className="health-service-read-more-overlay"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="health-service-child">
            <div className="medicine-img-container">
              <img src={NeurologyImg} alt={"no data found"} />
            </div>

            <h2> Neurology</h2>
            <p className="mt10 mb20 p20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              odit, unde fugiat autem earum luptatem sequuntur.
            </p>

            <div className="health-service-read-more-main-contaoner mb25">
              <Link
                to="/HealthService"
                className="health-service-read-more-link f-18 "
              >
                Read More
              </Link>
            </div>
            <div className="overlay">
              <Link
                to="/HealthService"
                className="health-service-read-more-overlay"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="health-service-child">
            <div className="medicine-img-container">
              <img src={EyeCareserviceImg} alt={"no data found"} />
            </div>

            <h2> Eye Care</h2>
            <p className="mt10 mb20 p20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              odit, unde fugiat autem earum luptatem sequuntur.
            </p>

            <div className="health-service-read-more-main-contaoner mb25">
              <Link
                to="/HealthService"
                className="health-service-read-more-link f-18 "
              >
                Read More
              </Link>
            </div>
            <div className="overlay">
              <Link
                to="/HealthService"
                className="health-service-read-more-overlay"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="health-service-child">
            <div className="medicine-img-container">
              <img src={CardiologyserviceImg} alt={"no data found"} />
            </div>

            <h2> Cardiology</h2>
            <p className="mt10 mb20 p20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              odit, unde fugiat autem earum luptatem sequuntur.
            </p>

            <div className="health-service-read-more-main-contaoner mb25">
              <Link
                to="/HealthService"
                className="health-service-read-more-link f-18 "
              >
                Read More
              </Link>
            </div>
            <div className="overlay">
              <Link
                to="/HealthService"
                className="health-service-read-more-overlay"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="health-service-child">
            <div className="medicine-img-container">
              <img src={DentalserviceImg} alt={"no data found"} />
            </div>

            <h2>Dental Care</h2>
            <p className="mt10 mb20 p20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              odit, unde fugiat autem earum luptatem sequuntur.
            </p>

            <div className="health-service-read-more-main-contaoner mb25">
              <Link
                to="/HealthService"
                className="health-service-read-more-link f-18 "
              >
                Read More
              </Link>
            </div>
            <div className="overlay">
              <Link
                to="/HealthService"
                className="health-service-read-more-overlay"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="health-service-child">
            <div className="medicine-img-container">
              <img src={PulmonaryserviceImg} alt={"no data found"} />
            </div>

            <h2>Pulmonary</h2>
            <p className="mt10 mb20 p20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              odit, unde fugiat autem earum luptatem sequuntur.
            </p>

            <div className="health-service-read-more-main-contaoner mb25">
              <Link
                to="/HealthService"
                className="health-service-read-more-link f-18 "
              >
                Read More
              </Link>
            </div>

            <div className="overlay">
              <Link
                to="/HealthService"
                className="health-service-read-more-overlay"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthService;
