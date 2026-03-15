import React from "react";
import { useState } from "react";

const Country = ({ country }) => {
  // console.log(country.population.population);
  const [visited, setVisited] = useState(false);
  const handleVisitBtn = () => {
    if (visited) {
      setVisited(false);
    } else {
      setVisited(true);
    }
  };

  return (
    <div className={visited ? 'country-visited' : 'country'}>
      <img
        className="country-flag"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h2>Name : {country.name.common} </h2>
      <h3>Capital : {country.capital.capital}</h3>
      <p>Population : {country.population.population}</p>
      <p>
        {country.population.population > 1000000
          ? "big by population"
          : "small by population"}
      </p>
      <p>Area : {country.area.area}</p>
      <p>{country.area.area > 100000 ? "Big" : "Small"}</p>
      <button className={visited ? 'btn-visited' : 'btn'} onClick={handleVisitBtn}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
