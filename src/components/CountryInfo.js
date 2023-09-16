import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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


  return <div>CountryInfo</div>;
}

export default CountryInfo;
