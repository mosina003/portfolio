import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import HeroSection from "../components/HeroSection"; // Import Hero Section
import "../styles/Home.css"; 

const Home = () => {
  return (
    <div>
      <Navbar />  {/* Navbar on top */}
      <HeroSection /> {/* Hero Section below Navbar */}
    </div>
  );
};

export default Home;

