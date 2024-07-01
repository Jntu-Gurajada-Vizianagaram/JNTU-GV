// Search.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchItems } from "./SearchData";
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    const filtered = searchItems.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setQuery(""); // Clear the search input
    setFilteredItems([]); // Clear the search results
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="search-input"
      />
      {filteredItems.length > 0 && (
        <ul className="search-results">
          {filteredItems.map((item, index) => (
            <li key={index} onClick={() => handleNavigation(item.path)} className="search-item">
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
