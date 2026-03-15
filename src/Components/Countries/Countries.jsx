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

  const [visitedFlag , setVisitedFlag] =useState([])
  const handleVisitedFlag =(flag)=>{
    const newVisitedFlag =[...visitedFlag,flag ]
    console.log(newVisitedFlag);
    setVisitedFlag(newVisitedFlag)
    
  }

  return (
    <>
      <h1>All countries : {countries.length}</h1>
      <h2>Countries visited : {visitedCountries.length} </h2>
      <h2>Visited flag : {visitedFlag.length}</h2>

      <div className="visited-flag">
         {
          visitedFlag.map((flag ,index )=> <img key={index} src={flag}></img>)
         }
      </div>
      <div className="container">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag ={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
