/* eslint-disable react/prop-types */
import BackIcon from '../assets/arrow-left.svg';
import { Link, useParams } from 'react-router-dom';
function CountryDescription({ countries }) {
  const { countryName } = useParams();

  // Find the selected country object based on the countryName parameter
  const selectedCountry = countries.find(
    (country) => country.name === countryName
  );

  return (
    <section className="country_description">
      <button className="back_btn">
        <img src={BackIcon} alt="back" />
        <Link to="/">Back</Link>
      </button>
      <div className="country_info_container">
        <div className="country_flag">
          <img
            src={selectedCountry.flags.svg}
            alt={`${selectedCountry.name}'s flag`}
          />
        </div>
        <div className="country_info_details">
          <h1>{selectedCountry.name}</h1>
          <div className="cols">
            <div>
              <p>
                <span className="pre_text">Region: </span>
                {selectedCountry.name}
              </p>
              <p>
                <span className="pre_text">Region: </span>
                {selectedCountry.name}
              </p>
              <p>
                <span className="pre_text">Region: </span>
                {selectedCountry.name}
              </p>
              <p>
                <span className="pre_text">Region: </span>
                {selectedCountry.name}
              </p>
            </div>
            <div>
              <p>
                <span className="pre_text">Region: </span>
                {selectedCountry.name}
              </p>
              <p>
                <span className="pre_text">Region: </span>
                {selectedCountry.name}
              </p>
              <p>
                <span className="pre_text">Region: </span>
                {selectedCountry.name}
              </p>
              <p>
                <span className="pre_text">Region: </span>
                {selectedCountry.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDescription;
