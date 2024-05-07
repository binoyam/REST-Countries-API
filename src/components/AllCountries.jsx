/* eslint-disable react/prop-types */
// eslint-disable-next-l☺ine react/prop-types
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './AllCountries.css';
function AllCountries({ countries }) {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <section className="countries_list">
      {countries.map((country, index) => (
        <Link
          to={`/countries/${country.name}`}
          className={`link ${!darkTheme && 'bg_l'}`}
          key={index}
        >
          <article>
            <img src={country.flags.png} alt="flag" />
            <div className="country_info">
              <h3 className={`name ${!darkTheme && 'light'}`}>
                {country.name}
              </h3>
              <p className={`population ${!darkTheme && 'light'}`}>
                <span className={`pre_text ${!darkTheme && 'light_pre'}`}>
                  Population:
                </span>
                {country.population.toLocaleString()}
              </p>
              <p className={`region ${!darkTheme && 'light'}`}>
                <span className={`pre_text ${!darkTheme && 'light_pre'}`}>
                  Region:
                </span>
                {country.region}
              </p>
              <p className={`capital ${!darkTheme && 'light'}`}>
                <span className={`pre_text ${!darkTheme && 'light_pre'}`}>
                  Capital:
                </span>
                {country.capital}
              </p>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default AllCountries;
