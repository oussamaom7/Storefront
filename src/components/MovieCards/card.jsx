import React from 'react';

function Card() {
  return (
    <div className="max-w-sm mx-auto my-10 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-64">
        <img className="absolute object-cover w-full h-full" src="https://image.tmdb.org/t/p/w300/tLFIMuPWJHlTJ6TN8HCOiSD6SdA.jpg" alt="Placeholder Image" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <div className="text-xl font-bold text-gray-800">
            Card Title
          </div>
          <div className="bg-gray-200 px-2 py-1 text-sm rounded-lg">
            New
          </div>
        </div>
        <p className="text-gray-700 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="font-bold text-gray-800">Author</span> - Name
          </div>
          <div className="text-sm">
            <span className="font-bold text-gray-800">Price</span> - $29.99
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
