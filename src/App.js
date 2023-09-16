import Countries from "./components/Countries";
import Nav from "./components/Nav";
import React, { useEffect, useState } from "react";
import Search from "./components/Search";

const url = "https://restcountries.com/v3.1";

function App() {
  const [countries, setCountries] = useState([]);

  const countryData = async () => {
    try {
      const response = await fetch(`${url}/all`);

      if (!response.ok) throw new Error("Something Went Wrong");

      const countries = await response.json();
      setCountries(countries);
      // console.log(countries);
    } catch (error) {
      alert(error);
    }
  };
  const getCountryByName = async (countryName) => {
    try {
      const response = await fetch(`${url}/name/${countryName}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Country data not found");
        } else {
          throw new Error("Something Went Wrong");
        }
      }
      const countries = await response.json();

      setCountries(countries);
    } catch (error) {
      alert(error);
    }
  };
  const getCountryByRegion = async (regionName) => {
    try {
      const response = await fetch(`${url}/region/${regionName}`);

      if (!response.ok) throw new Error("Something Went Wrong");

      const countries = await response.json();
      setCountries(countries);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    countryData();
  }, []);

  return (
    <div className="app">
      <Nav />
      <Search onSelect={getCountryByRegion} onSearch={getCountryByName} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
