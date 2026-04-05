import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { searchItems } from "./SearchData";
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const searchResultsRef = useRef(null);
  const containerRef = useRef(null);

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
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      navigate(path);
    }
    setQuery("");
    setFilteredItems([]);
    setIsExpanded(false);
  };

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setFilteredItems([]);
    }
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsExpanded(false);
      setFilteredItems([]);
      setQuery("");
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`search-container ${isExpanded ? 'expanded' : ''}`} ref={containerRef}>
      <div className="search-input-wrapper">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search items..."
          className="search-input"
          ref={searchInputRef}
          onKeyPress={(e) => e.key === 'Enter' && filteredItems.length > 0 && handleNavigation(filteredItems[0].path)}
        />
        <div className="search-icon-btn" onClick={toggleSearch}>
          {isExpanded ? <CloseIcon /> : <SearchIcon />}
        </div>
      </div>
      {isExpanded && filteredItems.length > 0 && (
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
