import React from "react";
import "./Index.css";
import Navbar from "../Common-component/Navbar";
import Footer from "../Common-component/Footer";
import AppoinmentPage from "./AppoinmentPage";
function Index() {
  return (
    <div className="Project-wrappper-container">
      <Navbar />
      <AppoinmentPage />
      <Footer />
    </div>
  );
}

export default Index;
