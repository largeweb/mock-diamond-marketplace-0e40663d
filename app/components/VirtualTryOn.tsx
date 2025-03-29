// app/components/VirtualTryOn.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Diamond } from "@/lib/types";

interface Props {
  diamond: Diamond; // Diamond data (not currently used but included as per the spec)
}

const VirtualTryOn: React.FC<Props> = ({ diamond }) => {
  const [selectedRing, setSelectedRing] = useState<string | null>(null);

  const ringVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Virtual Try-On</h2>
      <div className="relative w-64 h-64 mx-auto">
        <Image
          src="/hand.png"
          alt="Hand"
          width={256}
          height={256}
          className="object-contain"
        />

        <AnimatePresence>
          {selectedRing === "ring1" && (
            <motion.div
              variants={ringVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/ring1.png"
                alt="Ring 1"
                width={100}
                height={100}
                className="object-contain"
              />
            </motion.div>
          )}

          {selectedRing === "ring2" && (
            <motion.div
              variants={ringVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/ring2.png"
                alt="Ring 2"
                width={100}
                height={100}
                className="object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => setSelectedRing("ring1")}
          className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 ${
            selectedRing === "ring1" ? "bg-blue-300" : ""
          }`}
        >
          Ring 1
        </button>
        <button
          onClick={() => setSelectedRing("ring2")}
          className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 ${
            selectedRing === "ring2" ? "bg-blue-300" : ""
          }`}
        >
          Ring 2
        </button>
        <button
          onClick={() => setSelectedRing(null)}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default VirtualTryOn;