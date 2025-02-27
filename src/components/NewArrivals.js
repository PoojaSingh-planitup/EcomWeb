import React, { useState } from 'react';

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: 'Stylish Summer Dress',
      price: '$29.99',
      originalPrice: '$32',
      discount: 30,
      image: 'https://stado.in/cdn/shop/files/Summer_Dresses_for_Women_1_2000_x_4000px_57ddb9ac-c3ff-40dd-8699-e01e5f3c59a7.png?v=1712225874&width=360',
      rating: 4.7,
    },
    {
      id: 2,
      name: 'Trendy Casual Outfit',
      price: '$39.99',
      originalPrice: '$42',
      discount: 20,
      image: 'https://i.pinimg.com/236x/6e/ab/70/6eab70851dc07ad6db48971ecb0d7fd0.jpg',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Chic Evening Wear',
      price: '$320',
      originalPrice: '$460',
      discount: 15,
      image: 'https://fashion-nora.com/cdn/shop/files/Havana-Elegant-chic-evening-dress-Fashion-Nora.jpg?v=1714821110',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Elegant Jeans',
      price: '$220',
      originalPrice: '$300',
      discount: 12,
      image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/m/d/p/28-lds-1b-blst-non-stretch-holy-chic-original-imagr6vk3hx7zhpb.jpeg?q=90&crop=false',
      rating: 3.9,
    },
    {
      id: 5,
      name: 'Casual T-Shirt',
      price: '$29.99',
      originalPrice: '$32',
      discount: 30,
      image: 'https://hips.hearstapps.com/hmg-prod/images/mhl-tshirts-bugatchi-293-lead-669e776a9eee7.jpg?crop=0.561xw:0.871xh;0.216xw,0.0498xh&resize=1120:*',
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Formal Shoes',
      price: '$69.99',
      originalPrice: '$80',
      discount: 20,
      image: 'https://rukminim1.flixcart.com/image/300/300/xif0q/shoe/n/g/q/9-sse-029-brown-9-uk-auserio-brown-original-imagqmxwgw6bncf2.jpeg',
      rating: 4.8,
    },
    {
      id: 7,
      name: 'Jacket',
      price: '$119.99',
      originalPrice: '$225',
      discount: 30,
      image: 'https://imagescdn.peterengland.com/img/app/product/3/39627671-12954593.jpg?auto=format&w=390',
      rating: 4.2,
    },
    {
      id: 8,
      name: 'Sunglasses',
      price: '$39.99',
      originalPrice: '$50',
      discount: 35,
      image: 'https://www.dervin.in/cdn/shop/files/dervin-square-oversized-sunglasses-for-men-and-women-dervin-1.jpg?v=1720951100',
      rating: 4.5,
    },
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, showAll ? products.length : 4).map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                {Array(Math.floor(product.rating)).fill(null).map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
                {Array(5 - Math.floor(product.rating)).fill(null).map((_, index) => (
                  <span key={index}>&#9734;</span>
                ))}
                <span className="ml-2 text-gray-600">{product.rating}/5</span>
              </div>
              <span className="ml-4 text-gray-600 line-through">
              {product.originalPrice}
            </span>
            <span className="ml-2 text-red-500 font-bold">{product.price}</span>
            <span className="ml-2 text-green-500 font-bold">
              {product.discount}% OFF
            </span>
              
            </div>


           




          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button 
          onClick={() => setShowAll(!showAll)} 
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;