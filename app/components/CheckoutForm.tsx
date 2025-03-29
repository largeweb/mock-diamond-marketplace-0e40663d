// app/components/CheckoutForm.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a submission process
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setThankYou(true);
  };

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      {thankYou ? (
        <div className="text-center">
          <p className="text-green-600 font-bold mb-4">Thank you for your order!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="paymentInfo" className="block text-sm font-medium text-gray-700">
              Payment Information
            </label>
            <input
              type="text"
              id="paymentInfo"
              value={paymentInfo}
              onChange={(e) => setPaymentInfo(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block mr-2"
              >
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </motion.div>
            ) : null}
            {isSubmitting ? "Submitting..." : "Submit Order"}
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;