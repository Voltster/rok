import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-cover bg-center h-80 relative" style={{ backgroundImage: `url(${image})` }}>
      <div className="px-6 py-4 bg-gray-950/30 bg-opacity-75  absolute bottom-0">
        <h2 className="font-bold text-xl mb-2 text-gray-100">{title}</h2>
        <p className="text-gray-200 text-base">{description}</p>
        <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
          Know more
        </button>
      </div>
    </div>
  );
};

export default Card;
