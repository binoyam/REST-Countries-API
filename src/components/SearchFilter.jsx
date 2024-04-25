import SearchIcon from '../assets/search-icon.svg';
// eslint-disable-next-line react/prop-types
function SearchFilter() {
  return (
    <div className="search_filter">
      <div className="search_bar">
        <label htmlFor="search"></label>
        <input type="text" id="search" placeholder="Search for a country..." />
        <img src={SearchIcon} alt="Search" />
      </div>
      <div className="filter">
        <select>
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
