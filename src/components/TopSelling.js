import React, { useState } from 'react';

const TopSelling = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Black Dress',
      price: '$49.99',
      originalPrice : '$60',
      discount : 17,
      image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25774382/2023/11/9/82994890-cb1c-4b9a-8402-d0850d08ef9a1699551056277THEBLACKLOVERBlackA-LineDress1.jpg',
      rating: 4.7,
    },
    {
      id: 2,
      name: 'Striped Shirt',
      price: '$34.99',
      originalPrice : '$40',
      discount : 10,
      image: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77004037_43.jpg?imwidth=2048&imdensity=1&ts=1720793074454',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Straight Fit Jeans',
      price: '$39.99',
      originalPrice : '$45',
      discount : 15,
      image: 'https://www.globalrepublic.in/cdn/shop/products/1_result_bcfd8fc7-f5b7-4412-867c-7dc658fadec5.webp?v=1716539375',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Trendy Jacket',
      price: '$59.99',
      originalPrice : '$65',
      discount : 20,
      image: 'https://5.imimg.com/data5/ECOM/Default/2024/3/396610822/NQ/RH/DR/70444758/o1cn01b82nt222aezsq7a72-2100027079-500x500.webp',
      rating: 4.1,
    },
    {
      id: 5,
      name: 'Casual T-Shirt',
      price: '$29.99',
      originalPrice : '$36',
      discount : 21,
      image: 'https://m.media-amazon.com/images/I/81wy4PsxSCL._AC_UY1100_.jpg',
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Formal Shoes',
      price: '$69.99',
      originalPrice : '$80',
      discount : 19,
      image: 'https://teakwoodleathers.com/cdn/shop/files/T_SH_LWE_LU011_BR_1080x.jpg?v=1715671266',
      rating: 4.8,
    },
    {
      id: 7,
      name: 'Leather Belt',
      price: '$19.99',
      originalPrice : '$25',
      discount : 8,
      image: 'https://teakwoodleathers.com/cdn/shop/products/T_BT_751_BR_1_1080x.jpg?v=1666954298',
      rating: 4.2,
    },
    {
      id: 8,
      name: 'Sunglasses',
      price: '$39.99',
      originalPrice : '$50',
      discount : 17,
      image: 'https://5.imimg.com/data5/LM/NU/MY-36086933/men-sunglasses.jpg',
      rating: 4.5,
    },
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Top Selling Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, showAll ? products.length : 4).map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object -cover"
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

export default TopSelling;