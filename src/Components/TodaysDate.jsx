import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const TodaysDate = () => {
  // Create a new Date object
  const today = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current date components
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = today.getFullYear();
  const currentDay = days[today.getDay()]; // getDay() returns a number (0-6)

  // Format the date as YYYY-MM-DD
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <nav id="date-nav" className="bg-info d-flex justify-content-between">
      <span id="date" className="hello p-1 ">
        <p className="mx-2 ">{currentDay}</p>
        <p>{formattedDate}</p>
      </span>

      <span id="icons_nav">
        <FaFacebookF />
        <FaTwitter />
        <FaYoutube />
        <FaInstagram />
        <FaLinkedinIn />
      </span>
    </nav>
  );
};

export default TodaysDate;
