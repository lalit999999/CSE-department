import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import Academics from "./components/home/Academics";
import Labs from "./components/layout/Labs";
import People from "./components/home/People";

export default function App() {
  return (
    // Everything that uses Router hooks (like Navbar) MUST be inside <Router>
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar /> {/* Now Navbar can safely use useLocation() */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/labs" element={<Labs />} />
            {/* Add a placeholder for People or use Home */}
            <Route path="/people" element={<People />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
