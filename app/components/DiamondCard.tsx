// app/components/DiamondCard.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Diamond {
  name: string;
  imageUrl: string;
  price: number;
  carat: number;
  cut: string;
  color: string;
  clarity: string;
}

interface DiamondCardProps {
  diamond: Diamond;
}

const DiamondCard: React.FC<DiamondCardProps> = ({ diamond }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative h-48">
        <Image
          src={diamond.imageUrl}
          alt={diamond.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {diamond.name}
        </h3>
        <p className="text-gray-700 mt-2">
          Carat: {diamond.carat}
          <br />
          Cut: {diamond.cut}
        </p>
        <p className="text-xl font-bold text-blue-600 mt-2">
          ${diamond.price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
};

export default DiamondCard;