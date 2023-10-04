/* eslint-disable no-unused-vars */
// PromotionalService.js
import React, { useState, useEffect } from "react";
import "../styles/Home.module.css";

const messages = [
  "Free Returns",
  "3000+ Reviews",
  "Quality Waterproof Jewelry",
  "Free Gift Wrapping",
  "Exclusive Design",
  "Free Item Engraving",
];

const PromotionalService = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="promotional-service">
      {messages.map((message, index) => (
        <span key={index} className="visible">
          {message}
        </span>
      ))}
    </div>
  );
};

export default PromotionalService;
