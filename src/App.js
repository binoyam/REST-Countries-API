import Countries from "./components/Countries";
import Nav from "./components/Nav";
import Search from "./components/Search";
import React, { useEffect, useState } from "react";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const countryData = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      // console.log(countries);
    };
    countryData();
  }, []);
  return (
    <div className="app">
      <Nav />
      <Search countries={countries} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
