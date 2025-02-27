import React, { useState } from 'react';

const reviews = [
  {
    name: 'Sarah M.',
    rating: 5,
    review: 'I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations.',
  },
  {
    name: 'Alex K.',
    rating: 5,
    review: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly impressive, catering to a variety of tastes and occasions.',
  },
  {
    name: 'Emily R.',
    rating: 5,
    review: 'As someone who\'s always on the lookout for unique styles, Shop.co has become my go-to. Their selection is fantastic, and I love how easy it is to find something special.',
  },
  {
    name: 'John D.',
    rating: 4,
    review: 'I\'ve been shopping at Shop.co for a while now, and I must say, their customer service is top-notch. The quality of their products is also impressive.',
  },
  {
    name: 'Jane S.',
    rating: 3,
    review: 'I recently purchased a few items from Shop.co, and while I was satisfied with the quality, I felt that the prices were a bit steep.',
  },
  {
    name: 'Michael T.',
    rating: 4,
    review: 'I\'ve been a loyal customer of Shop.co for years, and I\'ve never been disappointed. Their products are always of high quality, and their customer service is excellent.',
  },
  {
    name: 'Olivia W.',
    rating: 5,
    review: 'I\'m so glad I discovered Shop.co! Their clothes are stylish, comfortable, and affordable. I\'ve already recommended them to all my friends and family.',
  },
  {
    name: 'William B.',
    rating: 4,
    review: 'I\'ve been shopping at Shop.co for a while now, and I\'ve always been satisfied with my purchases. Their products are of high quality, and their customer service is great.',
  },
  {
    name: 'Ava L.',
    rating: 5,
    review: 'I\'m so impressed with the quality and style of the clothes I\'ve purchased from Shop.co. Their selection is fantastic, and I love how easy it is to find something special.',
  },
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousReviews = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNextReviews = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const currentReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">OUR HAPPY CUSTOMERS</h2>
      <div className="flex justify-between mb-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handlePreviousReviews}
        >
          &lt;
        </button>
        <div className="flex-1 flex justify-center">
          {currentReviews.map((review, index) => (
            <div key={index} className="mx-4">
              <h5 className="text-lg font-semibold">{review.name}</h5>
              <div className="flex items-center mb-2">
                {Array(Math.floor(review.rating)).fill(null).map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
                {Array(5 - Math.floor(review.rating)).fill(null).map((_, index) => (
                  <span key={index}>&#9734;</span>
                ))}
                <span className="ml-2 text-gray-600">{review.rating}/5</span>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleNextReviews}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;