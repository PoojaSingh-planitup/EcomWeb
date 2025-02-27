import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Shop.co</h3>
        <p className="mb-4">Follow us on social media for the latest updates!</p>
        <ul className="flex justify-center space-x-4 mb-4">
          <li><a href="https://facebook.com" className="hover:text-gray-400">Facebook</a></li>
          <li><a href="https://instagram.com" className="hover:text-gray-400">Instagram</a></li>
          <li><a href="https://twitter.com" className="hover:text-gray-400">Twitter</a></li>
        </ul>
        <div className="border-t border-gray-700 pt-4">
          <p>&copy; 2023 Shop.co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;