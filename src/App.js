import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NewArrivals from './components/NewArrivals';
import TopSelling from './components/TopSelling';
import DressStyle from './components/DressStyle';
import CustomerReviews from './components/CustomerReviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductDetailPage from './components/ProductDetailPage';
import SearchResultsPage from './components/SearchResultsPage';
import CartPage from './components/CartPage';
import CategoryPage from './components/CategoryPage';
import {CartProvider} from './components/CartContext'

const App = () => {
  return (
    <Router>
      <CartProvider>
      <div className="bg-gray-100">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <NewArrivals />
                <TopSelling />
                <DressStyle />
                <CustomerReviews />
                <Newsletter />
                <Footer />
              </>
            }
          />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/top-selling" element={<TopSelling />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </div>
      </CartProvider>
    </Router>
  );
};

export default App;