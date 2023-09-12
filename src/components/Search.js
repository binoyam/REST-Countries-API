import React from "react";

function Search() {
  return (
    <form>
      <input type="text" placeholder="Search for a country..." />

      <div className="select-div">
        <select className="select">
          <option value="" disabled selected>Filter by Region</option>
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
