import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Newsletter from "./Newsletter";
import Footer from "./Footer"

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 400],
    colors: [],
    sizes: [],
    dressStyles: [],
    categories: [],
  });
  const [tempFilters, setTempFilters] = useState({ ...filters });

  // Sample product data with validated URLs
  const sampleProducts = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: 145,
      originalPrice: 242,
      discount: 20,
      rating: 4.5,
      color: "White",
      size: "S",
      dressStyle: "Casual",
      category: "T-shirts",
      image: "https://media.boohoo.com/i/boohoo/bmm08653_white_xl_3/male-white-official-print-t-shirt-with-tape-detail",
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      price: 180,
      originalPrice: 242,
      discount: 20,
      rating: 4.0,
      color: "Blue",
      size: "L",
      dressStyle: "Casual",
      category: "Jeans",
      image: "https://www.snitch.co.in/cdn/shop/files/4MSD3764-0335.jpg?v=1723637749",
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      originalPrice: 150,
      discount: 30,
      rating: 5.0,
      color: "Black",
      size: "S",
      dressStyle: "Casual",
      category: "T-shirts",
      image: "https://bananaclub.co.in/cdn/shop/files/BlackAndWhiteStripeT-shirt_1.jpg?v=1738063337&width=1000",
    },
    {
      id: 4,
      name: "Blazer",
      price: 220,
      originalPrice: 300,
      discount: 20,
      rating: 4.0,
      color: "Blue",
      size: "32",
      dressStyle: "Formal",
      category: "Blazer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_cvGz0otvjYvr0EhWxinwY_fSmnZbIcJnQ&s",
    },
    {
      id: 5,
      name: "Jacket",
      price: 350,
      originalPrice: 400,
      discount: 10,
      rating: 4.7,
      color: "Black",
      size: "32",
      dressStyle: "Party",
      category: "Jackets",
      image: "https://images-cdn.ubuy.co.in/666bd907af3ebb01366db7eb-one-opening-men-tuxedo-jacket-one-button.jpg",
    },
    {
      id: 6,
      name: "Classic Black Dress",
      price: 49.99,
      originalPrice: 60,
      discount: 17,
      rating: 4.7,
      color: "Black",
      size: "32",
      dressStyle: "Party",
      category: "Dress",
      image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25774382/2023/11/9/82994890-cb1c-4b9a-8402-d0850d08ef9a1699551056277THEBLACKLOVERBlackA-LineDress1.jpg",
    },
    {
      id: 7,
      name: "Chic Dress",
      price: 320,
      originalPrice: 460,
      discount: 15,
      rating: 4.8,
      color: "Green",
      size: "32",
      dressStyle: "Party",
      category: "Dress",
      image: "https://fashion-nora.com/cdn/shop/files/Havana-Elegant-chic-evening-dress-Fashion-Nora.jpg?v=1714821110",
    },
    {
      id: 8,
      name: "Summer Dress",
      price: 350,
      originalPrice: 400,
      discount: 10,
      rating: 4.7,
      color: "Blue",
      size: "32",
      dressStyle: "Casual",
      category: "Dress",
      image: "https://stado.in/cdn/shop/files/Summer_Dresses_for_Women_1_2000_x_4000px_57ddb9ac-c3ff-40dd-8699-e01e5f3c59a7.png?v=1712225874&width=360",
    },
    {
      id: 9,
      name: "Elegant Jeans",
      price: 220,
      originalPrice: 300,
      discount: 12,
      rating: 3.9,
      color: "Blue",
      size: "32",
      dressStyle: "Casual",
      category: "Jeans",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/m/d/p/28-lds-1b-blst-non-stretch-holy-chic-original-imagr6vk3hx7zhpb.jpeg?q=90&crop=false",
    },
  ];

  const filterProducts = (filters) => {
    return sampleProducts.filter((product) => {
      const dressStyles = filters.dressStyles || [];
      const priceRange = filters.priceRange || [0, 400];
      const colors = filters.colors || [];
      const sizes = filters.sizes || [];
      const categories = filters.categories || [];

      const matchesDressStyle = dressStyles.length === 0 || 
                              dressStyles.includes(product.dressStyle);
      const matchesPrice = product.price >= priceRange[0] && 
                         product.price <= priceRange[1];
      const matchesColor = colors.length === 0 || 
                         colors.includes(product.color);
      const matchesSize = sizes.length === 0 || 
                        sizes.includes(product.size);
      const matchesCategory = categories.length === 0 || 
                            categories.includes(product.category);

      return matchesDressStyle && matchesPrice && matchesColor && matchesSize && matchesCategory;
    });
  };

  useEffect(() => {
    const filtered = filterProducts(filters);
    setFilteredProducts(filtered);
  }, [filters]);

  const handleTempFilterChange = (filterType, value) => {
    setTempFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const handleApplyFilters = () => {
    setFilters({ ...tempFilters });
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    if (category) {
      const newFilters = {
        priceRange: [0, 400],
        colors: [],
        sizes: [],
        dressStyles: [],
        categories: [],
      };

      if (category === "formal") {
        newFilters.dressStyles.push("Formal");
        
      } else if (category === "casual") {
        newFilters.dressStyles.push("Casual");
        
      } else if (category === "party") {
        newFilters.dressStyles.push("Party");
        
      }

      setFilters(newFilters);
      setTempFilters(newFilters);
    }
  }, [category]);

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        <div className="md:col-span-1 space-y-4 ">
          <div className="bg-white p-4 rounded-lg shadow">
            <label className="block text-sm font-medium mb-2">
              Price Range ($0 - ${tempFilters.priceRange?.[1] || 400})
            </label>
            <input
              type="range"
              min="0"
              max="400"
              value={tempFilters.priceRange?.[1] || 400}
              onChange={(e) => handleTempFilterChange("priceRange", [0, parseInt(e.target.value)])}
              className="w-full"
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <label className="block text-sm font-medium mb-2">Colors</label>
            {["Blue", "White", "Red", "Black", "Gray", "Green"].map((color) => (
              <div key={color} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={color}
                  checked={tempFilters.colors?.includes(color) || false}
                  onChange={(e) => {
                    const updated = e.target.checked
                      ? [...(tempFilters.colors || []), color]
                      : (tempFilters.colors || []).filter(c => c !== color);
                    handleTempFilterChange("colors", updated);
                  }}
                  className="h-4 w-4"
                />
                <label htmlFor={color} className="ml-2">{color}</label>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <label className="block text-sm font-medium mb-2">Sizes</label>
            {["S", "M", "L", "XL", "32"].map((size) => (
              <div key={size} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={size}
                  checked={tempFilters.sizes?.includes(size) || false}
                  onChange={(e) => {
                    const updated = e.target.checked
                      ? [...(tempFilters.sizes || []), size]
                      : (tempFilters.sizes || []).filter(s => s !== size);
                    handleTempFilterChange("sizes", updated);
                  }}
                  className="h-4 w-4"
                />
                <label htmlFor={size} className="ml-2">{size}</label>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <label className="block text-sm font-medium mb-2">Categories</label>
            {["Jeans", "T-shirts", "Jackets", "Dress", "Blazer"].map((cat) => (
              <div key={cat} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={cat}
                  checked={tempFilters.categories?.includes(cat) || false}
                  onChange={(e) => {
                    const updated = e.target.checked
                      ? [...(tempFilters.categories || []), cat]
                      : (tempFilters.categories || []).filter(c => c !== cat);
                    handleTempFilterChange("categories", updated);
                  }}
                  className="h-4 w-4"
                />
                <label htmlFor={cat} className="ml-2">{cat}</label>
              </div>
            ))}
          </div>

          <button
            onClick={handleApplyFilters}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Apply Filters
          </button>
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border p-4 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleProductClick(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <div className="flex items-center mt-2">
                    <span className="text-gray-600">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ${product.originalPrice}
                    </span>
                    <span className="text-sm text-green-500 ml-2">
                      {product.discount}% off
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    {Array(Math.floor(product.rating)).fill(null).map((_, index) => (
                      <span key={index}>&#9733;</span>
                    ))}
                    {Array(5 - Math.floor(product.rating)).fill(null).map((_, index) => (
                      <span key={index}>&#9734;</span>
                    ))}
                    <span className="ml-2 text-gray-600">{product.rating}/5</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default CategoryPage;