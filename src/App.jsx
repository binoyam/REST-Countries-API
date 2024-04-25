import './index.css';
import Header from './components/Header';
import AllCountries from './components/AllCountries';
import { Route, Routes } from 'react-router-dom';
import CountryDescription from './components/CountryDescription';
import SearchFilter from './components/SearchFilter';
import data from './data.json';
const countries = data;
function App() {
  return (
    <div className="App">
      <Header />
      <SearchFilter countries={countries} />
      <Routes>
        <Route
          path="/countries"
          element={<AllCountries countries={countries} />}
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
