// app/components/DiamondDetails.tsx

import React from "react";

interface Diamond {
  name: string;
  price: number;
  carat: number;
  cut: string;
  clarity: string;
  color: string;
  shape: string;
}

interface Props {
  diamond: Diamond;
}

const DiamondDetails: React.FC<Props> = ({ diamond }) => {
  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <h3 className="text-xl font-semibold mb-4">{diamond.name}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Price:</p>
          <p className="font-medium">${diamond.price}</p>
        </div>
        <div>
          <p className="text-gray-600">Carat:</p>
          <p className="font-medium">{diamond.carat}</p>
        </div>
        <div>
          <p className="text-gray-600">Cut:</p>
          <p className="font-medium">{diamond.cut}</p>
        </div>
        <div>
          <p className="text-gray-600">Clarity:</p>
          <p className="font-medium">{diamond.clarity}</p>
        </div>
        <div>
          <p className="text-gray-600">Color:</p>
          <p className="font-medium">{diamond.color}</p>
        </div>
        <div>
          <p className="text-gray-600">Shape:</p>
          <p className="font-medium">{diamond.shape}</p>
        </div>
      </div>
    </div>
  );
};

export default DiamondDetails;