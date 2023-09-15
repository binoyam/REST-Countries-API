import Countries from "./components/Countries";
import Nav from "./components/Nav";
import React, { useEffect, useState } from "react";
import Search from "./components/Search";

const url = "https://restcountries.com/v3.1";

function App() {
  const [countries, setCountries] = useState([]);

  const countryData = async () => {
    const response = await fetch(`${url}/all`);
    const countries = await response.json();
    setCountries(countries);
    // console.log(countries);
  };
  const getCountryByName = async (countryName) => {
    const response = await fetch(`${url}/name/${countryName}`);
    const countries = await response.json();
    setCountries(countries);
  };
  const getCountryByRegion = async (regionName) => {
    const response = await fetch(`${url}/region/${regionName}`);
    const countries = await response.json();
    setCountries(countries);
  };

  useEffect(() => {
    countryData();
  }, []);

  return (
    <div className="app">
      <Nav />
      <Search 
      onSelect={getCountryByRegion}
      onSearch={getCountryByName} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
