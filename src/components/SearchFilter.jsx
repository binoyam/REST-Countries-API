/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import SearchIcon from '../assets/search-icon.svg';
// eslint-disable-next-line react/prop-types
function SearchFilter({ setFilteredCountries, countries }) {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleSelectChange = (event) => {
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
        <input type="text" id="search" placeholder="Search for a country..." />
        <img src={SearchIcon} alt="Search" />
      </div>
      <div className="filter">
        <select value={selectedRegion} onChange={handleSelectChange}>
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
