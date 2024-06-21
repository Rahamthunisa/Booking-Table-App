import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Make sure to create this CSS file

const Home = () => {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate("/reserve");
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
        <button onClick={handleReserveClick} className="reserve-button">Reserve a Table</button>
      </div>
    </div>
  );
};

export default Home;
