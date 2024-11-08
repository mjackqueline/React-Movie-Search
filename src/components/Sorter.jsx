import React from "react";
import { Link } from 'react-router-dom';

const Sorter = ({ onSortChange }) => {

    const handleSortChange = (e) => {
        onSortChange(e.target.value);
    };

  return (
    <div className="sort-container">
      <div className="sorter">
        <label htmlFor="sort">
          <span className="sort-label">Sort by: </span>
        </label>
        <select id="sort" onChange={handleSortChange}>
          <option value="">Sort Options</option>
          <option value="year-desc">Year (Newest to Oldest)</option>
          <option value="year-asc">Year (Oldest to Newest)</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
        </select>
      </div>
      <div className="back-button" id="back-button">
      <Link to="/" className="nav__link">
        <button className="back-btn">
          Back to Search
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Sorter;
