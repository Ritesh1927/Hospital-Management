import React from "react";
import "./Index.css";
import Navbar from "../Common-component/Navbar";
import Footer from "../Common-component/Footer";
import AppoinmentPage from "./AppoinmentPage";
import HealthService from "./HealthService";
import WelcomePage from "./WelcomePage";
import Cards from "../Common-component/Cards";
import FeedBack from "./FeedBack";
import Carousel from "./Carousel";
function Index() {
  return (
    <div className="Project-wrappper-container">
      <Navbar />
      <WelcomePage />
      <Cards />
      <HealthService />
      <Carousel />
      {/* <FeedBack /> */}
      <AppoinmentPage />

      <Footer />
    </div>
  );
}

export default Index;
