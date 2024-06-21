import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ReservationForm from "./components/ReservationForm";
import SuccessMessage from "./components/SuccessMessage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<ReservationForm />} />
        <Route path="/success" element={<SuccessMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
