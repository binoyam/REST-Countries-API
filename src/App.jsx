import './index.css';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import data from './data.json';
function App() {
  const countires = data;
  console.log(countires);
  return (
    <div className="App">
      <Header />
      <SearchFilter />
      <div className="countries_list">
        {countires.map((country, index) => (
          <article key={index}>
            <img src={country.flag} alt="flag" />
            <div className="country_info">
              <h3 className="name">{country.name}</h3>
              <p className="population">
                <span className="pre_text">Population:</span>
                {country.population}
              </p>
              <p className="region">
                <span className="pre_text">Region:</span>
                {country.region}
              </p>
              <p className="capital">
                <span className="pre_text">Capital:</span>
                {country.capital}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default App;
