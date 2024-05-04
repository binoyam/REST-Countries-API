/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import SearchIcon from '../assets/search-icon.svg';
import './SearchFilter.css';
// eslint-disable-next-line react/prop-types
function SearchFilter({ setFilteredCountries, countries }) {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredResults = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
    setFilteredCountries(filteredResults);
  };
  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setSelectedRegion(selectedRegion);
    const filteredCountries = selectedRegion
      ? countries.filter((country) => country.region === selectedRegion)
      : countries;

    setFilteredCountries(filteredCountries);
  };
  return (
    <div className="search_filter">
      <div className="search_bar">
        <label htmlFor="search"></label>
        <input
          value={searchTerm}
          onChange={handleSearch}
          type="text"
          id="search"
          placeholder="Search for a country..."
        />
        <img src={SearchIcon} alt="Search" />
      </div>
      <div className="filter">
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
