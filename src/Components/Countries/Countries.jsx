import React, { use } from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
      const countries =countriesData.countries
    //   console.log(countries);
      
    return (
        
        <>
        <h2>All countries : {countries.length}</h2>
         <div className='container'>
            
            
            {
                countries.map(country => <Country key={country.ccn3.ccn3}  country ={country}></Country>)
                
            }
        </div>
        
        </>
    );
};

export default Countries;