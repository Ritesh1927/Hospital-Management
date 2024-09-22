import React from "react";
import "./Cards.css";
import Doc1 from "../assets/Images/Doc1.jpg";
const Cards = () => {
  return (
    <>
      <div className="card__collection clear-fix">
        <div className="cards cards--two">
          <img src={Doc1} className="img-responsive" alt="Cards Image" />
          <span className="cards--two__rect"></span>
          <span className="cards--two__tri"></span>
          <p>Lucy Grace</p>
          <ul className="cards__list">
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-linkedin-in"></i>
            </li>
          </ul>
        </div>
        <div className="cards cards--three">
          <img src={Doc1} className="img-responsive" alt="" />
          <span className="cards--three__rect-1">
            <span className="shadow-1"></span>
            <p>Chris Levnon</p>
          </span>
          <span className="cards--three__rect-2">
            <span className="shadow-2"></span>
          </span>
          <span className="cards--three__circle"></span>
          <ul className="cards--three__list">
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-linkedin-in"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cards;
