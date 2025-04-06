import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./ScrollToTop";

const App = () => (
  <Router>
    <Helmet>
      <title>Mosina | Portfolio</title>
      <meta
        name="description"
        content="Portfolio of Mosina - AI/ML Projects, Web Development, and more!"
      />
      <meta
        name="keywords"
        content="Mosina, Portfolio, AI, Machine Learning, Web Developer, React, Python"
      />
      <meta name="author" content="Mosina" />
      <meta property="og:title" content="Mosina's Portfolio" />
      <meta
        property="og:description"
        content="Showcasing innovative AI and web development projects."
      />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>

    <ScrollToTop />
    <Navbar />
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  </Router>
);

export default App;
