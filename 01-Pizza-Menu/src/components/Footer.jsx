/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Order now</p>
          <button className="btn">Order Now</button>
        </div>
      ):(
        <p>We're closed right now</p>
      )}
    </footer>
  );
};

export default Footer;
