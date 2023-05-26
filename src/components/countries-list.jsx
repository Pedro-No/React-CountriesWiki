import {useState, useEffect} from 'react';
import {Link} from "react-router-dom"

function CountriesList(props) {

    let {countries} = props

    return (
        <div>
            <h2>Countries</h2>
            <div className='countryListDisplay'>
                {countries.map((country) => {
                    return (
                        <div key={country._id} className="country">
                            <Link to={`countries/${country.alpha3Code}`}>
                                <h3>{country.name.common}</h3>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag'/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default CountriesList;
