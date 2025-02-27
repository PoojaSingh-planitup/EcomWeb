import React from 'react';
import { Link } from 'react-router-dom';

const DressStyle = () => {
  const categories = [
    {
      name: 'Casual',
      image: 'https://perkclothing.com/cdn/shop/articles/1_94fef1c9-d6f2-441c-9a0c-03197bff5155.jpg?v=1646385053'
    },
    {
      name: 'Formal',
      image: 'https://www.fashionbeans.com/wp-content/uploads/2023/05/sidmashburn_mancathcingkeysmidair.jpg'
    },
    {
      name: 'Party',
      image: 'https://www.graceandivory.com/wp-content/uploads/2024/08/Suni-Ivory-White-Bridal-Party-Dress-Grace-Ivory-close.jpg'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Browse By Style</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            to={`/category/${category.name.toLowerCase()}`}
            key={category.name}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-white text-2xl font-bold tracking-wide">
                {category.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DressStyle;