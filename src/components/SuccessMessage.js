import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SuccessMessage.css"; // Make sure to create this CSS file

const SuccessMessage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, phoneNumber, guests, date, time } = location.state || {};

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <header className="header">
        <h1>Little Lemon</h1>
      </header>
      <div className="content">
        <img src="restaurant.jpg" alt="Restaurant" className="restaurant-image" />
        <h2>Restaurant Description:</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="success-message">
          <h2>Reservation Successful</h2>
          <p>Details:</p>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <p><strong>Number of guests:</strong> {guests}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <button onClick={handleHomeClick} className="home-button">Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
