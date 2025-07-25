import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailPage from "pages/DetailPage";
import Checkout from "pages/Checkout";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties/:id" element={<DetailPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;
