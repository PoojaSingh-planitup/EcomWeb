import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://i.ytimg.com/vi/UgE8hcbRVBU/maxresdefault.jpg')" }}>
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Shop.co</h1>
        <p className="text-xl mb-8">Your one-stop shop for the latest fashion trends.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;