/* eslint-disable react/prop-types */
import BackIcon from '../assets/arrow-left.svg';
import BackIconLight from '../assets/arrow-left-light.svg';
import { Link, useParams } from 'react-router-dom';
import './CountryDescription.css';
import { ThemeContext } from '../ThemeContext';
import { useContext } from 'react';
function CountryDescription({ countries }) {
  const { darkTheme } = useContext(ThemeContext);
  const { countryName } = useParams();

  const selectedCountry = countries.find(
    (country) => country.name === countryName
  );
  const getCountryFullName = (borderCode) => {
    const foundCountry = countries.find((country) =>
      country.alpha3Code.includes(borderCode)
    );
    return foundCountry ? foundCountry.name : '';
  };

  return (
    <section className={`country_description ${darkTheme ? '' : 'light_mode'}`}>
      <Link className={`back_btn ${darkTheme ? '' : 'back_btn_light'}`} to="/">
        <img src={darkTheme ? BackIcon : BackIconLight} alt="back" />
        Back
      </Link>
      <div className="country_info_container">
        <div className="country_flag">
          <img
            src={selectedCountry.flag}
            alt={`${selectedCountry.name}'s flag`}
          />
        </div>
        <div className="country_info_details">
          <h1 className={`country_title ${!darkTheme && 'light'}`}>
            {selectedCountry.name}
          </h1>
          <div className="detail_cols">
            <div className="col1">
              <div className={`vals ${!darkTheme && 'light'}`}>
                <span className={`pre-text ${!darkTheme && 'light_pre'}`}>
                  Native Name:
                </span>
                {selectedCountry.nativeName}
              </div>
              <div className={`vals ${!darkTheme && 'light'}`}>
                <span className={`pre-text ${!darkTheme && 'light_pre'}`}>
                  Population:
                </span>
                {selectedCountry.population.toLocaleString()}
              </div>
              <div className={`vals ${!darkTheme && 'light'}`}>
                <span className={`pre-text ${!darkTheme && 'light_pre'}`}>
                  Region:
                </span>
                {selectedCountry.region}
              </div>
              <div className={`vals ${!darkTheme && 'light'}`}>
                <span className={`pre-text ${!darkTheme && 'light_pre'}`}>
                  Sub Region:
                </span>
                {selectedCountry.subregion}
              </div>
              <div className={`vals ${!darkTheme && 'light'}`}>
                <span className={`pre-text ${!darkTheme && 'light_pre'}`}>
                  Capital:
                </span>
                {selectedCountry.capital ? selectedCountry.capital : 'N/A'}
              </div>
            </div>
            <div className="col2">
              <div className={`vals ${!darkTheme && 'light'}`}>
                <span className={`pre-text ${!darkTheme && 'light_pre'}`}>
                  Top Level Domain:
                </span>
                {selectedCountry.topLevelDomain}
              </div>
              <div className={`vals curs ${darkTheme ? '' : 'light'}`}>
                <span className={`pre-text ${!darkTheme && 'light_pre'}`}>
                  Currencies:
                </span>
                {selectedCountry.currencies
                  ? selectedCountry.currencies.map((currency, index) => (
                      <div key={index}>
                        {index > 0 && ', '}
                        {currency.name}
                      </div>
                    ))
                  : 'N/A'}
              </div>
              <div className={`vals langs ${darkTheme ? '' : 'light'}`}>
                <span className={`pre-text ${!darkTheme && 'light_pre'}`}>
                  Languages:
                </span>
                {selectedCountry.languages.map((language, index) => (
                  <div key={index}>
                    {index > 0 && ', '}
                    {language.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`vals borders ${darkTheme ? '' : 'light'}`}>
            <span className={`pre-text fixed ${darkTheme ? '' : 'light_pre'} `}>
              Border Countries:
            </span>
            <div className="borders_list">
              {selectedCountry.borders && selectedCountry.borders.length > 0 ? (
                selectedCountry.borders.map((border, index) => (
                  <Link
                    key={index}
                    className={`border_country_link ${
                      darkTheme ? '' : 'border_link_light'
                    } `}
                    to={`/countries/${getCountryFullName(border)}`}
                  >
                    {getCountryFullName(border).slice(0, 20)}
                  </Link>
                ))
              ) : (
                <div
                  className={`border_country_link ${
                    darkTheme ? '' : 'border_link_light'
                  } `}
                >
                  None
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDescription;
