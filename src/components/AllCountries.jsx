import { Link } from 'react-router-dom';
import data from '../data.json';
function AllCountries() {
  const countires = data;
  return (
    <div className="countries_list">
      {countires.map((country, index) => (
        <Link to='/' key={index}>
          <article>
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
        </Link>
      ))}
    </div>
  );
}

export default AllCountries;
