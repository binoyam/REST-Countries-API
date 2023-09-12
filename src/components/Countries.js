import React, { useEffect, useState } from "react";

const url = "https://restcountries.com/v3.1/all";
function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const countryData = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      // console.log(countries);
    };
    countryData();
  });

  return <div className="countries">
    {countries.map((country) =>(
      <div>
        <img src={country.flags.png} alt="" />
      </div>
    ))}

  </div>;
}

export default Countries;
