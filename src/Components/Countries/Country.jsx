import React from 'react';

const Country = ({country}) => {
    // console.log(country.population.population);
    
    return (
        <div className='country'>
            
            <img className='country-flag'  src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common} </h2>
            <p>Population : {country.population.population}</p>
            <p>{country.population.population >1000000? "big by population" : "small by population"}</p>
        </div>
    );
};

export default Country;