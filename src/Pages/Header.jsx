import React, { useState } from "react";
import Container from "./Container.jsx";
import Logo from "./Logo.jsx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";

function Header() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/" },
    { name: "About", slug: "/about" },
    { name: "History", slug: "/history" },
    
    
  ];

  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo width="70px" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4 bg-blue-200 ">
            
            

        
            <img
              src={assets.menu}
              alt="Menu"
              className="w-7 md:hidden cursor-pointer"
              onClick={() => setVisible(true)}
            />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 bottom-0 bg-blue-700 text-white transition-all duration-300 z-50 ${
            visible ? "w-3/4 p-6" : "w-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-2 cursor-pointer mb-4"
            >
              <img
                src={assets.Back}
                alt="Back"
                className="h-4 rotate-90"
              />
              <p>Back</p>
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.slug}
                onClick={() => setVisible(false)}
                className="py-2 px-3 border-b rounded hover:bg-blue-600 transition-colors"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;