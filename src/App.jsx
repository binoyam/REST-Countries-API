/* eslint-disable react/prop-types */
import './index.css';
import Header from './components/Header';
import AllCountries from './components/AllCountries';
import { Route, Routes, useLocation } from 'react-router-dom';
import CountryDescription from './components/CountryDescription';
import SearchFilter from './components/SearchFilter';
import { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

function App({ countries }) {
  const { darkTheme } = useContext(ThemeContext);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const location = useLocation();

  return (
    <div className={`App ${darkTheme ? "" : "light_mode_app"}`}>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {location.pathname !== '/countries/:countryName' && (
                <SearchFilter
                  setFilteredCountries={setFilteredCountries}
                  countries={countries}
                />
              )}
              <AllCountries countries={filteredCountries} />
            </>
          }
        />
        <Route
          path="/countries"
          element={<AllCountries countries={filteredCountries} />}
        />
        <Route
          path="/countries/:countryName"
          element={<CountryDescription countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
