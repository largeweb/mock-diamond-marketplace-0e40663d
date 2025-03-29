// app/diamonds/[id]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import DiamondDetails from "@/components/DiamondDetails";
import VirtualTryOn from "@/components/VirtualTryOn";

interface Diamond {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  carat: number;
  cut: string;
  clarity: string;
  color: string;
}

// Mock function to simulate fetching diamond data by ID
const mockFetchDiamond = async (id: string): Promise<Diamond | undefined> => {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Mock diamond data
  const mockDiamonds: Diamond[] = [
    {
      id: "1",
      name: "Radiant Spark",
      imageUrl: "/diamond_placeholder1.jpg",
      price: 5500,
      carat: 1.2,
      cut: "Excellent",
      clarity: "VVS1",
      color: "D",
    },
    {
      id: "2",
      name: "Azure Dream",
      imageUrl: "/diamond_placeholder2.jpg",
      price: 8200,
      carat: 1.5,
      cut: "Ideal",
      clarity: "VS2",
      color: "F",
    },
  ];

  return mockDiamonds.find((diamond) => diamond.id === id);
};

export default function DiamondDetailPage() {
  const params = useParams();
  const diamondId = Array.isArray(params.id) ? params.id[0] : params.id; // Safely access params.id
  const [diamond, setDiamond] = useState<Diamond | undefined>(undefined);

  useEffect(() => {
    const fetchDiamond = async () => {
      if (diamondId) {
        const fetchedDiamond = await mockFetchDiamond(diamondId);
        setDiamond(fetchedDiamond);
      }
    };

    fetchDiamond();
  }, [diamondId]);

  if (!diamond) {
    return <div>Loading diamond details...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Diamond Details</h1>
      <div className="md:flex gap-4">
        <div className="md:w-1/2">
          <DiamondDetails diamond={diamond} />
        </div>
        <div className="md:w-1/2">
          <VirtualTryOn diamond={diamond} />
        </div>
      </div>
    </div>
  );
}