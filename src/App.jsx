/* eslint-disable react/prop-types */
import './index.css';
import Header from './components/Header';
import AllCountries from './components/AllCountries';
import { Route, Routes } from 'react-router-dom';
import CountryDescription from './components/CountryDescription';
import SearchFilter from './components/SearchFilter';
import { useState } from 'react';

function App({ countries }) {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const filterCountries = (selectedContinent) => {
    if (selectedContinent) {
      const filtered = countries.filter(
        (country) => country.continent === selectedContinent
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countries);
    }
  };
  return (
    <div className="App">
      <Header />
      <SearchFilter
        setFilteredCountries={setFilteredCountries}
        countries={countries}
      />
      <Routes>
        <Route
          path="/"
          element={<AllCountries countries={filteredCountries} />}
        />
        <Route
          path="/countries/:countryName"
          element={<CountryDescription />}
        />
      </Routes>
    </div>
  );
}

export default App;
