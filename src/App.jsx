import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import axios from 'axios';

import Header from './components/header';
import CountriesList from './components/countries-list';
import CountryDetails from './components/country-details';

const apiURL = "https://ih-countries-api.herokuapp.com/countries"

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    axios.get(apiURL).then((response)=>{
      setCountries(response.data);
    })
  })  

  return (
    <div className="App">
        <Header/>
        <CountriesList countries= {countries}/>
        <Routes>
          <Route path="/countries/:countryId" element={<CountryDetails/>}/>
        </Routes>
    </div>
  );
}

export default App;
