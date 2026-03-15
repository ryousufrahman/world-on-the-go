import React from 'react';

const Country = ({country}) => {
    return (
        <div className='country'>
            <img className='country-flag'  src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.official} </h3>
        </div>
    );
};

export default Country;