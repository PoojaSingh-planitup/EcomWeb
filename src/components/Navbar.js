import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsMenuOpen, setIsBrandsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const brands = ["Nike", "Adidas", "Puma", "Gucci", "Zara"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };

  // Navigate to Cart Page
  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">SHOP.CO</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Shop</Link>
          <Link to="/top-selling" className="text-gray-700 hover:text-gray-900">On Sale</Link>
          <Link to="/new-arrivals" className="text-gray-700 hover:text-gray-900">New Arrivals</Link>
          <div 
            className="relative" 
            onMouseEnter={() => setIsBrandsMenuOpen(true)}
            onMouseLeave={() => setIsBrandsMenuOpen(false)}
          >
            <button className="text-gray-700 hover:text-gray-900">Brands</button>
            {isBrandsMenuOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg py-2 min-w-[200px]">
                {brands.map(brand => (
                  <Link
                    key={brand}
                    to={`/category/${brand}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {brand}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>


        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </form>

        {/* Cart and User Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Cart Icon */}
          <button onClick={handleCartClick} className="text-gray-700 hover:text-gray-900">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          {/* User Icon */}
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Shop</Link>
          <Link to="/top-selling" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">On Sale</Link>
          <Link to="/new-arrivals" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">New Arrivals</Link>
          <div className="relative">
            <button 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => setIsBrandsMenuOpen(!isBrandsMenuOpen)}
            >
              Brands
            </button>
            {isBrandsMenuOpen && (
              <div className="pl-4">
                {brands.map(brand => (
                  <Link
                    key={brand}
                    to={`/category/${brand}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {brand}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

