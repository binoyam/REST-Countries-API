import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Search from "./Search";

const url = "https://restcountries.com/v3.1";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const countryData = async () => {
    try {
      const response = await fetch(`${url}/all`);

      if (!response.ok) throw new Error("Something Went Wrong");

      const countries = await response.json();
      setCountries(countries);
      setIsLoading(false);

      // console.log(countries);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
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
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  const getCountryByRegion = async (regionName) => {
    try {
      const response = await fetch(`${url}/region/${regionName}`);

      if (!response.ok) throw new Error("Something Went Wrong");

      const countries = await response.json();
      setCountries(countries);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    countryData();
  }, []);

  return (
    <>
      <Search onSelect={getCountryByRegion} onSearch={getCountryByName} />

      <div className="countries">
        {isLoading && !error && <h4>Loading........</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {countries?.map((country) => (
          <Link className='link' to={`/country/${country.name.common}`}>
            <article key={country.name.official}>
              {console.log(country)}
              <img
                src={country.flags.png}
                alt={country.name.common}
                title={country.name.common}
              />
              <div className="country-info-div">
                <h3 className="name">{country.name.official}</h3>
                <p className="population">
                  <span className="pre-text">Population:</span>
                  {new Intl.NumberFormat().format(country.population)}
                </p>

                <p className="region">
                  <span className="pre-text">Region:</span> {country.region}
                </p>
                <p className="capital">
                  <span className="pre-text">Capital:</span> {country.capital}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Countries;
