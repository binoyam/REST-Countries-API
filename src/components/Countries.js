function Countries(countries) {



  return (
    <>
      {countries.map((country) => (
        <article key={country.numericCode}>
          <img src={country.flags.png} alt={country.name} />
          {/* <h3>hello: {country}</h3> */}
        </article>
      ))}
    </>
  );
}

export default Countries;
