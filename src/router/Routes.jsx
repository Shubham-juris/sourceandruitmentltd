import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import JobSeekers from "../pages/JobSeekers";
import SignInPage from "../pages/SignInPage";
import HireTalent from "../pages/HireTalent";
import CreateAccountPage from "../pages/CreateAccountPage";
import MyAccount from "../pages/MyAccount";
import ContactPage from "../pages/ContactPage";
import Hiring from "../pages/Hiring";
import ExploreJobs from "../pages/ExploreJobs";
import HotJobsPage from "../pages/HotjobsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/job-seekers" element={<JobSeekers />} /> 
      <Route path="/hire-talent" element={<HireTalent />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/hiring" element={<Hiring />} />
      <Route path="/explore-jobs" element={<ExploreJobs />} />
      <Route path="/hot-jobs" element={<HotJobsPage />} />
        
    </Routes>
  );
};

export default AppRoutes;


{/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/job-seekers" element={<JobSeekers />} />
        <Route path="/hire-talent" element={<HireTalent />} />
        <Route path="/explore-jobs" element={<ExploreJobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hot-jobs" element={<HotJobs />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/my-account" element={<MyAccount />} /> */}