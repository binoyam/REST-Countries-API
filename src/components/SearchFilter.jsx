/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import { useContext, useState } from 'react';
import SearchIcon from '../assets/search-icon.svg';
import SearchIconLight from '../assets/search-icon-light.svg';
import DownArrow from '../assets/down_arrow.svg';
import DownArrowLight from '../assets/down_arrow_light.svg';
import './SearchFilter.css';
import { ThemeContext } from '../ThemeContext';
function SearchFilter({ setFilteredCountries, countries }) {
  const { darkTheme } = useContext(ThemeContext);
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  /* SEARCH FUNCTION */
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredResults = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
    setFilteredCountries(filteredResults);
    if (filteredResults) {
      setSelectedRegion('');
    }
  };
  /* FILTER FUNCTION */
  const handleRegionChange = (region) => {
    const selectedRegion = region;
    setSelectedRegion(selectedRegion);
    const filteredCountries = selectedRegion
      ? countries.filter((country) => country.region === selectedRegion)
      : countries;

    setFilteredCountries(filteredCountries);
    setShowOptions(false);
    if (filteredCountries) {
      setSearchTerm('');
    }
  };
  return (
    <div className="search_filter">
      <div className="search_bar">
        <label htmlFor="search"></label>
        <input
          className={`search_input ${darkTheme ? '' : 'light_mode_search'}`}
          value={searchTerm}
          onChange={handleSearch}
          type="text"
          id="search"
          placeholder="Search for a country..."
        />
        <img src={darkTheme ? SearchIcon : SearchIconLight} alt="Search" />
      </div>

      <div className={`filter ${darkTheme ? '' : 'light_mode_filter'}`}>
        <div
          onClick={() => setShowOptions(!showOptions)}
          className="filter_title"
        >
          {selectedRegion ? selectedRegion : 'Filter By Region'}
          <img src={darkTheme ? DownArrow : DownArrowLight} alt="down arrow" />
        </div>
        {showOptions && (
          <ul className={`regions ${darkTheme ? '' : 'light_mode_regions'}`}>
            {regions.map((region, index) => (
              <li
                className="region_option"
                key={index}
                onClick={() => handleRegionChange(region)}
              >
                {region}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchFilter;
