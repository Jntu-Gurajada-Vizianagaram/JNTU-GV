// Search.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { searchItems } from "./SearchData";
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const searchResultsRef = useRef(null);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    const filtered = searchItems.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleNavigation = (path) => {

   if (path.startsWith("http") || path.startsWith("https")) {
      // Handle external links
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      // Handle internal links
      navigate(path);
    }
    setQuery(""); // Clear the search input
    setFilteredItems([]); // Clear the search results
  };

  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      searchResultsRef.current &&
      !searchInputRef.current.contains(event.target) &&
      !searchResultsRef.current.contains(event.target)
    ) {
      setFilteredItems([]);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="search-input form-control"
        ref={searchInputRef}
      />
      {filteredItems.length > 0 && (
        <ul className="search-results" ref={searchResultsRef}>
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
