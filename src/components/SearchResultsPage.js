import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchResultsPage = () => {
  const query = new URLSearchParams(useLocation().search).get('q');
  const navigate = useNavigate();

  // Mock product data (replace with your actual data)
  const products = [
    {
        id: 1,
        name: 'T-shirt with Tape Details',
        price: '$145',
        originalPrice: '$242',
        discount: 20,
        rating: 4.5,
        image: 'https://media.boohoo.com/i/boohoo/bmm08653_white_xl_3/male-white-official-print-t-shirt-with-tape-detail',
        category: 'Men',
        description: 'This is a T-shirt with tape details.',
        colors: ['Green', 'Blue', 'Black'],
        sizes: ['Small', 'Medium', 'Large', 'X-Large'],
      },
      
      {
        id: 2,
        name: 'Skinny Fit Jeans',
        price: '$180',
        originalPrice: '$242',
        discount: 20,
        rating: 4.0,
        image: 'https://www.snitch.co.in/cdn/shop/files/4MSD3764-0335.jpg?v=1723637749',
        category: 'Women',
        description: 'This is a pair of skinny fit jeans.',
        colors: ['Green', 'Blue', 'Black'],
        sizes: ['Small', 'Medium', 'Large', 'X-Large'],
      },
      {
        id: 3,
        name: "Black Striped T-shirt",
        price: '$120',
        originalPrice: '$150',
        discount: 30,
        rating: 5.0,
        color: "Black",
        sizes: ['Small', 'Medium', 'Large', 'X-Large'],
        dressStyle: "Casual",
        category: "T-shirts",
        image: "https://bananaclub.co.in/cdn/shop/files/BlackAndWhiteStripeT-shirt_1.jpg?v=1738063337&width=1000",
      },
      {
        id: 4,
        name: "Blazer",
        price: '$220',
        originalPrice: '$300',
        discount: 20,
        rating: 4.0,
        color: "Blue",
        sizes: ['Small', 'Medium', ],
        dressStyle: "Formal",
        category: "Blazer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_cvGz0otvjYvr0EhWxinwY_fSmnZbIcJnQ&s",
      },
      {
        id: 5,
        name: "Jacket",
        price: '$350',
        originalPrice: '$400',
        discount: 10,
        rating: 4.7,
        color: "Black",
        size: "32",
        dressStyle: "Party",
        category: "Jacket",
        image: "https://images-cdn.ubuy.co.in/666bd907af3ebb01366db7eb-one-opening-men-tuxedo-jacket-one-button.jpg",
      },
      {
        id: 6,
        name: "Classic Black Dress",
        price: '$49.99',
        originalPrice: '$60',
        discount: 17,
        rating: 4.7,
        color: "Black",
        size: "32",
        dressStyle: "Party",
        category: "Dress",
        image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25774382/2023/11/9/82994890-cb1c-4b9a-8402-d0850d08ef9a1699551056277THEBLACKLOVERBlackA-LineDress1.jpg',
        
      },
      {
        id: 7,
        name: "Chic Dress",
        price: '$320',
        originalPrice: '$460',
        discount: 15,
        rating: 4.8,
        color: "Green",
        size: "32",
        dressStyle: "Party",
       
        category: "Dress",
  
        image: 'https://fashion-nora.com/cdn/shop/files/Havana-Elegant-chic-evening-dress-Fashion-Nora.jpg?v=1714821110',
  
      },
      {
        id: 8,
        name: "Summer Dress",
        price: '$350',
        originalPrice: '$400',
        discount: 10,
        rating: 4.7,
        color: "Blue",
        size: "32",
        dressStyle: "Casual",
        category: "Dress",
        image: 'https://stado.in/cdn/shop/files/Summer_Dresses_for_Women_1_2000_x_4000px_57ddb9ac-c3ff-40dd-8699-e01e5f3c59a7.png?v=1712225874&width=360',
  
        
      },
      {
        id: 9,
        name: "Elegant Jeans",
        price: '$220',
        originalPrice: '$300',
        discount: 12,
        rating: 3.9,
        color: "Blue",
        size: "32",
        dressStyle: "Casual",
        category: "Jeans",
        image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/m/d/p/28-lds-1b-blst-non-stretch-holy-chic-original-imagr6vk3hx7zhpb.jpeg?q=90&crop=false',
        
      },
      {
        id: 10,
        name: "Jacket",
        price: '$350',
        originalPrice: '$400',
        discount: 10,
        rating: 4.7,
        color: "Black",
        size: "32",
        dressStyle: "Party",
        category: "Jacket",
        image: "https://images-cdn.ubuy.co.in/666bd907af3ebb01366db7eb-one-opening-men-tuxedo-jacket-one-button.jpg",
      },
    // Add more products as needed
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              <div className="relative w-full h-80 overflow-hidden rounded-lg mb-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="ml-2 text-gray-600">({product.rating} Rating)</span>
              </div>
              <button
                onClick={() => navigate(`/product/${product.id}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-2xl font-bold mt-8">No products found!</div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;