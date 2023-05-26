import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from "axios";

function CountryDetails() {
    const {countryId} = useParams();

    const apiURL = `https://ih-countries-api.herokuapp.com/countries/${countryId}`

    const [country, setCountry]=useState()

    useEffect(()=>{
        axios.get(apiURL).then((response)=>{
            setCountry(response.data);
        })
        .catch((error) => {console.log('Erro na API',error)
          })
    })

    return (
    <div>
        {country? (<div className='col-7'>
            <h1>{country.name.official}</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag'/>
                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{country.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {country.area} km
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        {country.borders.map((border) => {
                            return(
                            <li>
                                <Link to={`countries/${country.alpha3Code}`}>
                                    <h3>{border}</h3>
                                </Link>
                            </li>)
                        })}
                    </ul>
                </td>
                </tr>
            </tbody>
            </table>
    </div>): <h3>Loading</h3>}
    </div>
    )
}
  
export default CountryDetails;