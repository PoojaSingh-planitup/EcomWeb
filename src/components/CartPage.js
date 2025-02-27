import React from 'react';
import { useCart } from './CartContext';
import Newsletter from './Newsletter';
import Footer from './Footer';

// Create a number formatter
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  // Calculate total price safely
  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    return total + (price * item.quantity);
  }, 0);

  // Handle quantity increase
  const handleIncreaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  // Handle quantity decrease
  const handleDecreaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              const price = Number(item.price) || 0;
              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center border-b pb-6 mb-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-contain mb-4 sm:mb-0"
                  />
                  <div className="flex-1 sm:ml-6 text-center sm:text-left">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">{formatter.format(price)}</p>
                    <div className="flex items-center justify-center sm:justify-start mt-4">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded-l"
                      >
                        -
                      </button>
                      <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
                    <p className="text-lg font-semibold">
                      {formatter.format(price * item.quantity)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatter.format(totalPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{formatter.format(0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>{formatter.format(0)}</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{formatter.format(totalPrice)}</span>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CartPage;