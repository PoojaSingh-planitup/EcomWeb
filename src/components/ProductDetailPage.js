import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { useCart } from './CartContext';


// Mock product data (replace with your actual data)
const products = [
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    price: 145,
    originalPrice: 242,
    discount: 40,
    rating: 4.5,
    image: 'https://media.boohoo.com/i/boohoo/bmm08653_white_xl_3/male-white-official-print-t-shirt-with-tape-detail',
    gender: 'Men',
    description: 'This is a T-shirt with tape details.',
    colors: ['White', 'Blue', 'Black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    reviews: [
      {
        name: 'Samantha D.',
        rating: 5,
        comment: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to shirt.',
        date: 'August 14, 2023',
      },
      {
        name: 'Alex M.',
        rating: 4,
        comment: 'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
        date: 'August 15, 2023',
      },
      {
        name: 'Ethan R.',
        rating: 5,
        comment: 'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
        date: 'August 16, 2023',
      },
      {
        name: 'Olivia P.',
        rating: 4,
        comment: 'As a UI/UX enthusiast, I value simplicity and functionality. This t -shirt delivers on both fronts. The fit is great, and it pairs well with various outfits. Highly recommend!',
        date: 'August 17, 2023',
      },
    ],
    faqs: [
      {
        question: 'What material is the t-shirt made of?',
        answer: 'The t-shirt is made of 100% cotton, ensuring comfort and breathability.',
      },
      {
        question: 'How should I wash this t-shirt?',
        answer: 'We recommend machine washing in cold water and tumble drying on low heat to maintain the quality.',
      },
      {
        question: 'Is there a size chart available?',
        answer: 'Yes, you can find the size chart on our website under the sizing section.',
      },
    ],
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    price: 180,
    originalPrice: 242,
    discount: 20,
    rating: 4.0,
    image: 'https://www.snitch.co.in/cdn/shop/files/4MSD3764-0335.jpg?v=1723637749',
    gender: 'Men',
    description: 'This is a pair of skinny fit jeans.',
    colors: [ 'Blue'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    reviews: [
      {
        name: 'Deeksha.',
        rating: 5,
        comment: 'I absolutely love this Jeans! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to.',
        date: 'August 14, 2023',
      },
      {
        name: 'Ibrahim',
        rating: 4,
        comment: 'The Jeans exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
        date: 'August 15, 2023',
      },
      {
        name: 'Dawood',
        rating: 3,
        comment: 'This Jeans is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
        date: 'August 16, 2023',
      },
    ],
    faqs: [
      {
        question: 'What material is the t-shirt made of?',
        answer: 'The t-shirt is made of 100% cotton, ensuring comfort and breathability.',
      },
      {
        question: 'How should I wash this t-shirt?',
        answer: 'We recommend machine washing in cold water and tumble drying on low heat to maintain the quality.',
      },
      {
        question: 'Is there a size chart available?',
        answer: 'Yes, you can find the size chart on our website under the sizing section.',
      },
    ],
  },
  {
    id: 3,
    name: 'Black Striped T-shirt',
    price: 120,
    originalPrice: 150,
    discount: 30,
    rating: 5.0,
    image: 'https://bananaclub.co.in/cdn/shop/files/BlackAndWhiteStripeT-shirt_1.jpg?v=1738063337&width=1000',
    gender: 'Men',
    description: 'This is a Black Tshirt for casual wear.',
    colors: ['Black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    reviews: [
      {
        name: 'Deeksha.',
        rating: 5,
        comment: 'I absolutely love this Jeans! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to.',
        date: 'August 14, 2023',
      },
      {
        name: 'Ibrahim',
        rating: 4,
        comment: 'The Jeans exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
        date: 'August 15, 2023',
      },
      {
        name: 'Dawood',
        rating: 3,
        comment: 'This Jeans is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
        date: 'August 16, 2023',
      },
    ],
    faqs: [
      {
        question: 'What material is the t-shirt made of?',
        answer: 'The t-shirt is made of 100% cotton, ensuring comfort and breathability.',
      },
      {
        question: 'How should I wash this t-shirt?',
        answer: 'We recommend machine washing in cold water and tumble drying on low heat to maintain the quality.',
      },
      {
        question: 'Is there a size chart available?',
        answer: 'Yes, you can find the size chart on our website under the sizing section.',
      },
    ],
  },
  {
    id: 4,
    name: 'Blazer',
    price: 220,
    originalPrice: 300,
    discount: 20,
    rating: 4.0,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_cvGz0otvjYvr0EhWxinwY_fSmnZbIcJnQ&s',
    gender: 'Men',
    description: 'This is a Blazer for formal wear.',
    colors: [ 'Blue', 'Black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    reviews: [
      {
        name: 'Deeksha.',
        rating: 5,
        comment: 'I absolutely love this Jeans! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to.',
        date: 'August 14, 2023',
      },
      {
        name: 'Ibrahim',
        rating: 4,
        comment: 'The Jeans exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
        date: 'August 15, 2023',
      },
      {
        name: 'Dawood',
        rating: 3,
        comment: 'This Jeans is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
        date: 'August 16, 2023',
      },
    ],
    faqs: [
      {
        question: 'What material is the t-shirt made of?',
        answer: 'The t-shirt is made of 100% cotton, ensuring comfort and breathability.',
      },
      {
        question: 'How should I wash this t-shirt?',
        answer: 'We recommend machine washing in cold water and tumble drying on low heat to maintain the quality.',
      },
      {
        question: 'Is there a size chart available?',
        answer: 'Yes, you can find the size chart on our website under the sizing section.',
      },
    ],
  },
  {
    id: 5,
    name: 'Jacket',
    price: 350,
    originalPrice: 400,
    discount: 10,
    rating: 4.7,
    image: 'https://images-cdn.ubuy.co.in/666bd907af3ebb01366db7eb-one-opening-men-tuxedo-jacket-one-button.jpg',
    gender: 'Men',
    description: 'This is a pair of skinny fit jeans.',
    colors: ['Blue', 'Black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    reviews: [
      {
        name: 'Deeksha.',
        rating: 5,
        comment: 'I absolutely love this Jeans! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to.',
        date: 'August 14, 2023',
      },
      {
        name: 'Ibrahim',
        rating: 4,
        comment: 'The Jeans exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
        date: 'August 15, 2023',
      },
      {
        name: 'Dawood',
        rating: 3,
        comment: 'This Jeans is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
        date: 'August 16, 2023',
      },
    ],
    faqs: [
      {
        question: 'What material is the t-shirt made of?',
        answer: 'The t-shirt is made of 100% cotton, ensuring comfort and breathability.',
      },
      {
        question: 'How should I wash this t-shirt?',
        answer: 'We recommend machine washing in cold water and tumble drying on low heat to maintain the quality.',
      },
      {
        question: 'Is there a size chart available?',
        answer: 'Yes, you can find the size chart on our website under the sizing section.',
      },
    ],
  },
  {
    id: 6,
    name: 'Classic Black Dress',
    price: 49.99,
    originalPrice: 60,
    discount: 17,
    image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25774382/2023/11/9/82994890-cb1c-4b9a-8402-d0850d08ef9a1699551056277THEBLACKLOVERBlackA-LineDress1.jpg',
    rating: 4.7,
    gender: 'Women',
    description: 'This is a Black dress for party wear.',
    colors: [ 'Black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    reviews: [
      {
        name: 'Deeksha.',
        rating: 5,
        comment: 'I absolutely love this Jeans! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to.',
        date: 'August 14, 2023',
      },
      {
        name: 'Ibrahim',
        rating: 4,
        comment: 'The Jeans exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
        date: 'August 15, 2023',
      },
      {
        name: 'Dawood',
        rating: 3,
        comment: 'This Jeans is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
        date: 'August 16, 2023',
      },
    ],
    faqs: [
      {
        question: 'What material is the t-shirt made of?',
        answer: 'The t-shirt is made of 100% cotton, ensuring comfort and breathability.',
      },
      {
        question: 'How should I wash this t-shirt?',
        answer: 'We recommend machine washing in cold water and tumble drying on low heat to maintain the quality.',
      },
      {
        question: 'Is there a size chart available?',
        answer: 'Yes, you can find the size chart on our website under the sizing section.',
      },
    ],
  },
  {
    id: 7,
    name: 'Chic Dress',
    price: 320,
    originalPrice: 460,
    discount: 15,
    rating: 4.8,
    image: 'https://fashion-nora.com/cdn/shop/files/Havana-Elegant-chic-evening-dress-Fashion-Nora.jpg?v=1714821110',
    gender: 'Women',
    description: 'This is a party wear dress.',
    colors: ['Green' , 'Black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    reviews: [
      {
        name: 'Deeksha.',
        rating: 5,
        comment: 'I absolutely love this Jeans! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to.',
        date: 'August 14, 2023',
      },
      {
        name: 'Ibrahim',
        rating: 4,
        comment: 'The Jeans exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
        date: 'August 15, 2023',
      },
      {
        name: 'Dawood',
        rating: 3,
        comment: 'This Jeans is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
        date: 'August 16, 2023',
      },
    ],
    faqs: [
      {
        question: 'What material is the t-shirt made of?',
        answer: 'The t-shirt is made of 100% cotton, ensuring comfort and breathability.',
      },
      {
        question: 'How should I wash this t-shirt?',
        answer: 'We recommend machine washing in cold water and tumble drying on low heat to maintain the quality.',
      },
      {
        question: 'Is there a size chart available?',
        answer: 'Yes, you can find the size chart on our website under the sizing section.',
      },
    ],
  },
  {
    id: 8,
    name: 'Summer Dress',
    price: 350,
    originalPrice: 400,
    discount: 10,
    rating: 4.7,
    image: 'https://stado.in/cdn/shop/files/Summer_Dresses_for_Women_1_2000_x_4000px_57ddb9ac-c3ff-40dd-8699-e01e5f3c59a7.png?v=1712225874&width=360',
    gender: 'Women',
    description: 'This is a summer Dress.',
    colors: ['Blue', 'Black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    reviews: [
      {
        name: 'Deeksha.',
        rating: 5,
        comment: 'I absolutely love this Jeans! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to.',
        date: 'August 14, 2023',
      },
      {
        name: 'Ibrahim',
        rating: 4,
        comment: 'The Jeans exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
        date: 'August 15, 2023',
      },
      {
        name: 'Dawood',
        rating: 3,
        comment: 'This Jeans is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
        date: 'August 16, 2023',
      },
    ],
    faqs: [
      {
        question: 'What material is the t-shirt made of?',
        answer: 'The t-shirt is made of 100% cotton, ensuring comfort and breathability.',
      },
      {
        question: 'How should I wash this t-shirt?',
        answer: 'We recommend machine washing in cold water and tumble drying on low heat to maintain the quality.',
      },
      {
        question: 'Is there a size chart available?',
        answer: 'Yes, you can find the size chart on our website under the sizing section.',
      },
    ],
  },
  {
    id: 9,
    name: 'Elegant Jeans',
    price: 220,
    originalPrice: 300,
    discount: 12,
    rating: 3.9,
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/m/d/p/28-lds-1b-blst-non-stretch-holy-chic-original-imagr6vk3hx7zhpb.jpeg?q=90&crop=false',
    gender: 'Women',
    description: 'This is a pair of skinny fit jeans.',
    colors: ['Blue', 'Black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    reviews: [
      {
        name: 'Deeksha.',
        rating: 5,
        comment: 'I absolutely love this Jeans! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to.',
        date: 'August 14, 2023',
      },
      {
        name: 'Ibrahim',
        rating: 4,
        comment: 'The Jeans exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
        date: 'August 15, 2023',
      },
      {
        name: 'Dawood',
        rating: 3,
        comment: 'This Jeans is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
        date: 'August 16, 2023',
      },
    ],
    faqs: [
      {
        question: 'What material is the t-shirt made of?',
        answer: 'The t-shirt is made of 100% cotton, ensuring comfort and breathability.',
      },
      {
        question: 'How should I wash this t-shirt?',
        answer: 'We recommend machine washing in cold water and tumble drying on low heat to maintain the quality.',
      },
      {
        question: 'Is there a size chart available?',
        answer: 'Yes, you can find the size chart on our website under the sizing section.',
      },
    ],
  },
  
   
  // Add more products as needed
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {addToCart} = useCart();
  const product = products.find((product) => product.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("Green");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description'); // State to manage active tab
  const [visibleReviews, setVisibleReviews] = useState(2); // Number of visible reviews
  const [reviewFilter, setReviewFilter] = useState('latest'); // Filter for reviews
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 5 }); // State for new review

  if (!product) {
    return (
      <div className="text-center text-2xl font-bold mt-8">
        Product not found!
      </div>
    );
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleLoadMoreReviews = () => {
    setVisibleReviews(visibleReviews + 2);
  };

  const handleHideReviews = () => {
    setVisibleReviews(2); // Reset to initial number of visible reviews
  };

  const handleReviewFilterChange = (filter) => {
    setReviewFilter(filter);
  };

  const handleAddReview = () => {
    const review = {
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    };
    product.reviews.unshift(review); // Add new review to the beginning
    setNewReview({ name: '', comment: '', rating: 5 }); // Reset form
  };

  const sortedReviews = [...product.reviews].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return reviewFilter === 'latest' ? dateB - dateA : dateA - dateB;
  });
  

const handleAddToCart = () => {
  addToCart(product);
  navigate('/cart'); // Redirect to cart page
};


  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <p className="text-gray-600 text-center">{product.description}</p>;
      case 'reviews':
        return (
          <div className="space-y-4 w-full max-w-3xl mx-auto">
            {/* Review Filters */}
            <div className="flex justify-center mb-4">
              <select
                value={reviewFilter}
                onChange={(e) => handleReviewFilterChange(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="latest">Latest</option>
                <option value="old">Oldest</option>
              </select>
            </div>

            {/* Reviews */}
            {sortedReviews.slice(0, visibleReviews).map((review, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="ml-2 text-gray-600">{review.rating} Rating</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
                <p className="text-sm text-gray-500 mt-2">
                  By {review.name} on {review.date}
                </p>
              </div>
            ))}

            {/* Load More and Hide Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              {visibleReviews < sortedReviews.length && (
                <button
                  onClick={handleLoadMoreReviews}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Load More
                </button>
              )}
              {visibleReviews > 2 && (
                <button
                  onClick={handleHideReviews}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Hide
                </button>
              )}
            </div>

            {/* Add Review Form */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-center">Add a Review</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <textarea
                  placeholder="Your Comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <div className="flex items-center gap-2">
                  <span>Rating:</span>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                    className="p-2 border rounded"
                  >
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <option key={rating} value={rating}>
                        {rating}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={handleAddReview}
                  className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        );
      case 'faqs':
        return (
          <div className="space-y-4 w-full max-w-3xl mx-auto">
            {product.faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  // Related Products (filter by category)
  const relatedProducts = products.filter(
    (p) => p.gender === product.gender && p.id !== product.id
  );

  return (
    <div className="flex flex-col p-4">
      {/* Product Details Section */}
      <div className="flex">
        {/* Image Section */}
        <div className="w-1/2 pr-4 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-contain rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-1/2 pl-4 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
  
  {/* Rating Section */}
  <div className="flex items-center mb-4">
    <div className="flex items-center">
      <span className="text-yellow-500">★★★★☆</span>
      <span className="ml-2 text-gray-600">({product.rating} Rating)</span>
    </div>
  </div>

  {/* Price Details Section */}
  <div className="flex items-center mb-4">
    <span className="text-gray-600 line-through mr-2">
      {product.originalPrice}
    </span>
    <span className="text-red-500 font-bold mr-2">
      {product.price}
    </span>
    <span className="text-green-500 font-bold">
      {product.discount}% OFF
    </span>
  </div>

  {/* Product Description Section */}
  <span className="text-gray-700 mt-2">
    {product.description}
  </span>

          {/* Color Selection */}
          <div className="mb-6 mt-6">
            <label htmlFor="color" className="block text-gray-700 font-bold mb-2">
              Select Colors
            </label>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-blue-500" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                ></button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <label htmlFor="size" className="block text-gray-700 font-bold mb-2">
              Select Size
            </label>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <div
                  key={size}
                  className={`flex items-center justify-center p-2 border rounded cursor-pointer ${
                    selectedSize === size
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleSizeChange(size)}
                >
                  <span className="text-sm">{size}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <button
                onClick={handleDecreaseQuantity}
                className="bg-gray-200 px-3 py-1 rounded-l"
              >
                -
              </button>
              <span className="bg-gray-100 px-4 py-1">{quantity}</span>
              <button
                onClick={handleIncreaseQuantity}
                className="bg-gray-200 px-3 py-1 rounded-r"
              >
                +
              </button>
            </div>
            <button onClick={handleAddToCart} className="bg-blue-500 text-white font-bold py-2 px-8 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mt-8 border-b w-full">
        <div className="flex space-x-4 justify-center w-full">
          <button
            onClick={() => setActiveTab('description')}
            className={`py-2 px-4 w-1/3 ${
              activeTab === 'description'
                ? 'border-b-2 border-blue-500 font-bold'
                : 'text-gray-500'
            }`}
          >
            Product Description
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-2 px-4 w-1/3${
              activeTab === 'reviews'
                ? 'border-b-2 border-blue-500 font-bold'
                : 'text-gray-500'
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`py-2 px-4 w-1/3 ${
              activeTab === 'faqs'
                ? 'border-b-2 border-blue-500 font-bold'
                : 'text-gray-500'
            }`}
          >
            FAQs
          </button>
        </div>
      </div>



      {/* Tab Content */}
      <div className="mt-8 w-full">
        {renderTabContent()}
      </div>

      {/* You Might Also Like Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="cursor-pointer border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="ml-2 text-gray-600">({product.rating} Rating)</span>
              </div>
              <div className="mt-2">
                <span className="text-gray-600 line-through">{product.originalPrice}</span>
                <span className="ml-2 text-red-500 font-bold">{product.price}</span>
                <span className="ml-2 text-green-500 font-bold">
                  {product.discount}% OFF
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
    
  );
};

export default ProductDetailPage;