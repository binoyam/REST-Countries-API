/* eslint-disable react/prop-types */
import BackIcon from '../assets/arrow-left.svg';
import { Link, useParams } from 'react-router-dom';
import './CountryDescription.css';
function CountryDescription({ countries }) {
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
    <section className="country_description">
      <Link className="back_btn" to="/">
        <img src={BackIcon} alt="back" />
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
          <h1 className="country_title">{selectedCountry.name}</h1>
          <div className="detail_cols">
            <div className="col1">
              <div className="vals">
                <span className="pre-text">Native Name:</span>
                {selectedCountry.nativeName}
              </div>
              <div className="vals">
                <span className="pre-text">Population:</span>
                {selectedCountry.population.toLocaleString()}
              </div>
              <div className="vals">
                <span className="pre-text">Region:</span>
                {selectedCountry.region}
              </div>
              <div className="vals">
                <span className="pre-text">Sub Region:</span>
                {selectedCountry.subregion}
              </div>
              <div className="vals">
                <span className="pre-text">Capital:</span>
                {selectedCountry.capital ? selectedCountry.capital : 'N/A'}
              </div>
            </div>
            <div className="col2">
              <div className="vals">
                <span className="pre-text">Top Level Domain:</span>
                {selectedCountry.topLevelDomain}
              </div>
              <div className="vals curs">
                <span className="pre-text">Currencies:</span>
                {selectedCountry.currencies
                  ? selectedCountry.currencies.map((currency, index) => (
                      <div key={index}>
                        {index > 0 && ', '}
                        {currency.name}
                      </div>
                    ))
                  : 'N/A'}
              </div>
              <div className="vals langs">
                <span className="pre-text">Languages:</span>
                {selectedCountry.languages.map((language, index) => (
                  <div key={index}>
                    {index > 0 && ', '}
                    {language.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="vals borders">
            <span className="pre-text fixed">Border Countries:</span>
            <div className="borders_list">
              {selectedCountry.borders && selectedCountry.borders.length > 0 ? (
                selectedCountry.borders.map((border, index) => (
                  <Link
                    key={index}
                    className="border_country_link"
                    to={`/countries/${getCountryFullName(border)}`}
                  >
                    {getCountryFullName(border).slice(0, 20)}
                  </Link>
                ))
              ) : (
                <div className="border_country_link">None</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDescription;
