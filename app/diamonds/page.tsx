// app/diamonds/page.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DiamondCard from "@/components/DiamondCard";
import SearchInput from "@/components/SearchInput";

// Mock data for diamonds
const mockFetchDiamonds = async () => {
  // Simulate network latency.
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: "1",
      name: "The Hope Diamond",
      imageUrl: "/diamond_placeholder1.jpg",
      price: 350000000,
      carat: 45.52,
      cut: "Cushion",
      clarity: "VS1",
      color: "Blue",
      shape: "Cushion"
    },
    {
      id: "2",
      name: "The Cullinan Diamond",
      imageUrl: "/diamond_placeholder2.jpg",
      price: 400000000,
      carat: 530.2,
      cut: "Asscher",
      clarity: "VVS2",
      color: "Colorless",
      shape: "Pear"
    },
    {
      id: "3",
      name: "The Koh-i-Noor",
      imageUrl: "/diamond_placeholder1.jpg",
      price: 140000000,
      carat: 105.6,
      cut: "Oval",
      clarity: "IF",
      color: "Colorless",
      shape: "Oval"
    },
    {
      id: "4",
      name: "The Pink Star",
      imageUrl: "/diamond_placeholder2.jpg",
      price: 83000000,
      carat: 59.60,
      cut: "Radiant",
      clarity: "IF",
      color: "Pink",
      shape: "Oval"
    },
    {
      id: "5",
      name: "De Beers Centenary Diamond",
      imageUrl: "/diamond_placeholder1.jpg",
      price: 100000000,
      carat: 273.85,
      cut: "Modified Heart",
      clarity: "FL",
      color: "Colorless",
      shape: "Heart"
    },
  ];
};

export default function DiamondsPage() {
  const [diamonds, setDiamonds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState([0, 500000000]);
  const [caratFilter, setCaratFilter] = useState([0, 600]);
  const [shapeFilter, setShapeFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const diamondData = await mockFetchDiamonds();
      setDiamonds(diamondData);
    };

    fetchData();
  }, []);

  const filteredDiamonds = React.useMemo(() => {
      let filtered = [...diamonds];

      if (searchQuery) {
          filtered = filtered.filter(diamond =>
              diamond.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
      }

      filtered = filtered.filter(
          (diamond) =>
              diamond.price >= priceFilter[0] && diamond.price <= priceFilter[1]
      );

      filtered = filtered.filter(
          (diamond) =>
              diamond.carat >= caratFilter[0] && diamond.carat <= caratFilter[1]
      );

      if (shapeFilter) {
          filtered = filtered.filter(diamond => diamond.shape === shapeFilter);
      }
      return filtered;
  }, [diamonds, searchQuery, priceFilter, caratFilter, shapeFilter]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Diamond Marketplace</h1>

        <div className="md:flex gap-4">
          {/* Filters */}
          <div className="md:w-1/4 mb-4 md:mb-0">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-2">Filters</h2>
              <SearchInput onSearch={handleSearch} />

              <div>
                <h3 className="text-lg font-medium mt-3">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="500000000"
                  value={priceFilter[0]}
                  onChange={(e) => setPriceFilter([Number(e.target.value), priceFilter[1]])}
                />
                <input
                  type="range"
                  min="0"
                  max="500000000"
                  value={priceFilter[1]}
                  onChange={(e) => setPriceFilter([priceFilter[0], Number(e.target.value)])}
                />
                <p>Price: ${priceFilter[0]} - ${priceFilter[1]}</p>
              </div>

               <div>
                <h3 className="text-lg font-medium mt-3">Carat Range</h3>
                <input
                  type="range"
                  min="0"
                  max="600"
                  value={caratFilter[0]}
                  onChange={(e) => setCaratFilter([Number(e.target.value), caratFilter[1]])}
                />
                <input
                  type="range"
                  min="0"
                  max="600"
                  value={caratFilter[1]}
                  onChange={(e) => setCaratFilter([caratFilter[0], Number(e.target.value)])}
                />
                <p>Carat: {caratFilter[0]} - {caratFilter[1]}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mt-3">Shape</h3>
                <select
                    value={shapeFilter}
                    onChange={(e) => setShapeFilter(e.target.value)}
                    className="w-full border rounded py-2 px-3 mt-2"
                >
                    <option value="">All</option>
                    <option value="Cushion">Cushion</option>
                    <option value="Pear">Pear</option>
                    <option value="Oval">Oval</option>
                    <option value="Heart">Heart</option>
                </select>
            </div>
            </div>
          </div>

          {/* Diamond Listings */}
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence>
                {filteredDiamonds.map((diamond) => (
                  <motion.div
                    key={diamond.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DiamondCard diamond={diamond} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}