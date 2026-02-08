import React, { useState, useEffect } from "react";
import { Search, Globe, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [localSearch, setLocalSearch] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync navbar search with URL parameters
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setLocalSearch(query);

    // Redirect to people page and append the search query to the URL
    if (query.trim() !== "") {
      navigate(`/people?search=${encodeURIComponent(query)}`);
    } else if (location.pathname === "/people") {
      navigate("/people"); // Clear search if input is empty while on people page
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Academics", path: "/academics" },
    { name: "Laboratories", path: "/labs" },
    { name: "People", path: "/people" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      {/* Utility Bar */}
      <div className="hidden sm:flex bg-[#800000] text-white py-2 px-8 text-[11px] font-medium justify-between items-center border-b border-white/10">
        <div className="flex gap-6 uppercase tracking-wider">
          <a href="#" className="hover:text-amber-400 transition-colors">
            Fees
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            Academic Portal
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            Jobs @NITP
          </a>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-amber-400 transition-colors">
          <Globe size={12} /> <span>ENGLISH</span>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={`bg-white px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src="https://res.cloudinary.com/dsmyka9cr/image/upload/v1770575382/nitplogo_je6ekp.png"
            alt="logo"
            className="w-[40px] transition-transform group-hover:scale-110"
          />
          <div className="hidden lg:block">
            <h1 className="font-black text-xl leading-tight text-[#800000] tracking-tighter">
              NIT PATNA
            </h1>
            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">
              Computer Science & Engineering
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-1 items-center mx-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                isActive(link.path)
                  ? "bg-[#800000]/10 text-[#800000]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-[#800000]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Search & Actions */}
        <div className="hidden md:flex items-center gap-4 border-l pl-6">
          <div className="relative flex items-center group">
            <Search
              size={16}
              className="absolute left-3 text-gray-400 group-focus-within:text-[#800000] transition-colors"
            />
            <input
              type="text"
              placeholder="Search faculty, scholars..."
              value={localSearch}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 bg-gray-100 border-none focus:ring-2 focus:ring-[#800000]/20 rounded-xl text-sm outline-none w-48 lg:w-64 transition-all duration-300"
            />
          </div>
          <button className="bg-[#800000] text-white px-5 py-2.5 rounded-xl text-xs font-black tracking-wider hover:bg-[#600000] transition-all active:scale-95 whitespace-nowrap">
            PORTAL LOGIN
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          <div className="relative flex items-center">
            <Search size={18} className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search people..."
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl outline-none"
              onChange={handleSearch}
            />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold p-2 ${isActive(link.path) ? "text-[#800000] border-l-4 border-[#800000] pl-4" : "text-gray-600"}`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-[#800000] text-white w-full py-4 rounded-xl font-bold mt-2">
            PORTAL LOGIN
          </button>
        </div>
      )}
    </nav>
  );
}
