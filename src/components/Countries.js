function Countries(props) {
  return (
    <>
      <div className="countries">
        {props.countries.map((country) => (
          <article key={country.numericCode}>
            <img src={country.flags.svg} alt={country.name.common} />
            <h3 className="name">{country.name.common}</h3>
            <p className="population">Population: {country.population}</p>

            <p className="region">Region: {country.region}</p>
            <p className="capital">
              {console.log(country.name)}
              Capital: {country.capital}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}

export default Countries;
