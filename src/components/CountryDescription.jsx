import { useParams } from 'react-router-dom';
import data from '../data.json';
function CountryDescription() {
  const countries = data;
  const { countryName } = useParams();

  // Find the selected country object based on the countryName parameter
  const selectedCountry = countries.find(
    (country) => country.name === countryName
  );

  return (
    <div>
      <h1>{selectedCountry.name}</h1>
      <img src={selectedCountry.flag} />
    </div>
  );
}

export default CountryDescription;
