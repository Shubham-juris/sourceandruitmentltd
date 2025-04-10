import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import JobSeekers from "../pages/JobSeekers";
import SignInPage from "../pages/SignInPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/job-seekers" element={<JobSeekers />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
};

export default AppRoutes;
