import SearchIcon from '../assets/search-icon.svg';

function SearchFilter() {
  return (
    <div className="search_filter">
      <div className="search_bar">
        <label htmlFor="search"></label>
        <input type="text" id="search" placeholder="Search for a country..." />
        <img src={SearchIcon} alt="Search" />
      </div>
      <div className="filter">
        <select name="" id="">
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
