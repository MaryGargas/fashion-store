import React from "react";

const ProductCard = ({ imageUrl, name, price }) => {
  return (
    <div className="w-full sm:w-[45%] md:w-[30%] p-2">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-gray-600">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;