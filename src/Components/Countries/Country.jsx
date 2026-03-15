import React from 'react';

const Country = ({country}) => {
    return (
        <div className='country'>
            <h3>Name : {country.name.common} </h3>
        </div>
    );
};

export default Country;