import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const Home = () => (
  <div>
    <Hero />
    {/* Add more content below */}
  </div>
);
const Categories = () => <h1>Explore Categories</h1>;
const AboutUs = () => <h1>About Us</h1>;
const ContactUs = () => <h1>Contact Us</h1>;

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
