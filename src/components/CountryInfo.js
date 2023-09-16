import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v3.1";

function CountryInfo() {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  useEffect(() => {
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

        setCountry(countries);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    getCountryByName();
  }, [countryName]);

  return (
    <div className="country-info-wrapper">
      <button>
        <Link to="/">Back</Link>
      </button>
      {isLoading && !error && <h4>Loading...</h4>}
      {error && !isLoading && { error }}
      {country?.map((country, index) => {})}
      <div className="country-info-container">
        <div className="country-info-img">
          <img src="" alt="" />
        </div>

        <div className="country-info-content">
          <h3>Belgium</h3>

          <div className="country-info-columns">
            <div className="info-col-1">
              <p className="native-name">
                <span className="pre-text">Native Name:</span> {country.region}
              </p>
              <p className="population">
                <span className="pre-text">Population:</span>
                {new Intl.NumberFormat().format(country.population)}
              </p>
              <p className="region">
                <span className="pre-text">Region:</span> {country.region}
              </p>
              <p className="sub-region">
                <span className="pre-text">Sub Region:</span> {country.region}
              </p>
              <p className="capital">
                <span className="pre-text">Capital:</span> {country.capital}
              </p>
            </div>

            <div className="info-col-2">
              <p className="domain">
                <span className="pre-text">Top Level Domain:</span>{" "}
                {country.region}
              </p>
              <p className="currencies">
                <span className="pre-text">Currencies:</span>
                {/* {new Intl.NumberFormat().format(country.population)} */}
              </p>
              <p className="languages">
                <span className="pre-text">Languages:</span> {country.region}
              </p>
            </div>
          </div>

          <p className="border">
            <span className="pre-text">Border Countries:{country}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
