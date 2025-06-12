import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/SignUp";
import Home from "./Pages/Home";
// import Alljobs from "./components/Alljobs";
import Navabar from "./components/Navbar";
import Footer from "./components/Footer";
import Apply from "./components/Apply";
import Alljobs1 from "./components/Alljobs1";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navabar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/apply/:jobId" element={<Apply />} />
          <Route path="/alljobs" element={<Alljobs1 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
