import React, { useState } from "react";
import SearchIcon from '../images/search-icon.svg'

function Search({ onSearch, onSelect }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  const handleSelect = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <form onSubmit={handleChange}>
      <img className="search-icon" src={SearchIcon} alt="search icon" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <div className="select-div">
        <select className="select" onChange={handleSelect}>
          <option value="" disabled>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
}

export default Search;
/* should search and filter be diffrent components? */