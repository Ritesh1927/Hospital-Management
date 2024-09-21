import React from "react";
import Navbar from "../Common-component/Navbar";
import Footer from "../Common-component/Footer";
import AppoinmentPage from "./AppoinmentPage";
import HealthService from "./HealthService";
function Index() {
  return (
    <div>
      {/* <Navbar /> */}
      <AppoinmentPage/>
      <Footer/>
      <HealthService/>
    </div>
  );
}

export default Index;
