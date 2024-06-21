import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReservationForm.css"; // Make sure to create this CSS file

const ReservationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    guests: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (
      formData.name &&
      formData.email &&
      formData.phoneNumber &&
      formData.guests &&
      formData.date &&
      formData.time
    ) {
      navigate("/success", { state: { ...formData } });
    } else {
      alert("Please fill in all fields.");
    }
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
        <form onSubmit={handleSubmit} className="reservation-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="number"
            name="guests"
            placeholder="Number of guests"
            value={formData.guests}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
