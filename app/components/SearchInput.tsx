// app/components/SearchInput.tsx
"use client";

import React, { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleChange}
      placeholder="Search diamonds..."
      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  );
};

export default SearchInput;