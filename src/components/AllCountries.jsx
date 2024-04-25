/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function AllCountries({ countries }) {
  return (
    <div className="countries_list">
      {countries.map((country, index) => (
        <Link to={`/countries/${country.name}`} className="link" key={index}>
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
