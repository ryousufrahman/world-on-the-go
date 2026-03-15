import React, { use, useState } from "react";
import Country from "./Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;


  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log(country);
     const newVisitedCountries =[...visitedCountries , country]
     
    setVisitedCountries(newVisitedCountries)
  };

  return (
    <>
      <h1>All countries : {countries.length}</h1>
      <h2>Countries visited : {visitedCountries.length} </h2>
      <div className="container">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
